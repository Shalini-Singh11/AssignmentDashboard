import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  IconButton,
  Button,
  Modal,
  TextField,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  Menu,
  FormControl,
  InputLabel,
} from "@mui/material";
// ========= material UI ICONS======================
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ordersData } from "../../uidata/OrderData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { useTheme } from "@mui/material";

//================== Import styles ===========================
import {
  tableContainStyle,
  modalBoxStyle,
  tableRowStyle,
  filterBoxStyle,
  formControlStyle,
  buttonStyle,
  modalTextFieldStyle,
} from "./style";

const OrderList = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [data, setData] = useState(ordersData);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [filterText, setFilterText] = useState("");
  const [formError, setFormError] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    id: "",
    user: "",
    project: "",
    address: "",
    date: "",
    status: "",
    profilePic: "",
  });


  //===================== Track the last generated ID based on existing orders =====================

  const [lastGeneratedId, setLastGeneratedId] = useState(
    ordersData.length
      ? parseInt(ordersData[ordersData.length - 1].id.replace("#CM", ""))
      : 0
  );
  //===================== Generate the next Order ID based on the last or highest existing id =====================

  const generateOrderId = () => {
    const newOrderId = `#CM${lastGeneratedId + 1}`;
    setLastGeneratedId(lastGeneratedId + 1);
    return newOrderId;
  };

  //===================== Sorting in acs & desc on button filter icon or arrowdownwardforward =====================

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    const sortedData = [...data].sort((a, b) =>
      isAsc
        ? a[property].localeCompare(b[property])
        : b[property].localeCompare(a[property])
    );
    setData(sortedData);
  };

  //===================== Pagination =====================

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //===================== Filter the data =====================

  const filteredData = data.filter(
    (item) =>
      item.id.toLowerCase().includes(filterText.toLowerCase()) ||
      item.user.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase())
  );

  //===================== Add order modal with validation =====================

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleAddOrder = () => {
    if (!/^[a-zA-Z\s]*$/.test(newOrder.user)) {
      alert("Username must only contain letters");
      return;
    }

    //===================== Create the new order data in table with using modal =====================
    const { user, project, address, date, status } = newOrder;

    if (!user || !project || !address || !date || !status) {
      setFormError("All fields are required.");
      return;
    }

    setFormError("");
    //===================== Auto-generate the order ID =====================

    const orderId = generateOrderId();

    const newOrderData = {
      id: orderId,
      user: newOrder.user,
      project: newOrder.project,
      address: newOrder.address,
      date: newOrder.date,
      status: newOrder.status,
      profilePic:
        newOrder.profilePic || "https://randomuser.me/api/portraits/men/1.jpg",
    };

    // ===================== Add the new order at the top =====================

    setData([newOrderData, ...data]);
    setOpenModal(false);
    setNewOrder({
      id: "",
      user: "",
      project: "",
      address: "",
      date: "",
      status: "",
      profilePic: "",
    });

    //===================== Edit =====================
    if (editingOrder) {
      const updatedData = data.map((item) =>
        item.id === editingOrder.id
          ? { ...newOrder, id: editingOrder.id }
          : item
      );
      setData(updatedData);
      setEditingOrder(null);
      toast.success("Order edited successfully!");
    } else {
      toast.success("Order created successfully!");
    }
    setOpenModal(false);
  };

  //===================== Select All Checkbox =====================

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredData.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // ===================== select check box by particular id =====================

  const handleSelectOneClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  //===================== for different status in table =====================

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return { color: isDarkMode ? "#8A8CD9" : "#8A8CD9" };
      case "Complete":
        return { color: isDarkMode ? "#4AA785" : "#4AA785" };
      case "Pending":
        return { color: isDarkMode ? "#59A8D4" : "#59A8D4" };
      case "Approved":
        return { color: isDarkMode ? "#FFC555" : "#FFC555" };
      case "Rejected":
        return { color: isDarkMode ? "#FFFFFF66" : "#1C1C1C66" };
      default:
        return { color: "black" };
    }
  };

  //========== Menu open and close handlers==========
  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setEditingOrder(row);
  };
  const handleMenuClose = () => setAnchorEl(null);

  //========== Delete order==========
  const handleDeleteOrder = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    setSelected(selected.filter((selectedId) => selectedId !== id));
    handleMenuClose();
    toast.success("Order deleted successfully!");
  };

  //======= Edit order ==========
  const handleEditOrder = () => {
    setNewOrder(editingOrder);
    setOpenModal(true);
    handleMenuClose();
  };

  return (
    <Box sx={tableContainStyle}>
      <Typography variant="h6" gutterBottom>
        Order List
      </Typography>

      <Box sx={filterBoxStyle(isDarkMode)}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <IconButton onClick={handleOpenModal}>
              <AddIcon />
            </IconButton>
            <IconButton onClick={() => handleRequestSort("id")}>
              <FilterListIcon />
            </IconButton>
            <IconButton onClick={() => handleRequestSort("id")}>
              <ImportExportIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              placeholder="Search"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              size="small"
              fullWidth
              sx={modalTextFieldStyle}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ overflowX: "auto" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={handleSelectAllClick}
                    checked={selected.length === filteredData.length}
                  />
                </TableCell>
                {[
                  "Order ID",
                  "User",
                  "Project",
                  "Address",
                  "Date",
                  "Status",
                ].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      color: isDarkMode ? "#FFFFFF66" : "black",
                    }}
                  >
                    {" "}
                    {header}{" "}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  let formattedDate;

                  if (moment(row.date, moment.ISO_8601, true).isValid()) {
                    formattedDate = moment(row.date).format("MM/DD/YYYY");
                  } else if (
                    moment(
                      row.date,
                      ["YYYY-MM-DD", "MMM D, YYYY"],
                      true
                    ).isValid()
                  ) {
                    formattedDate = moment(row.date, "MMM D, YYYY").format(
                      "MM/DD/YYYY"
                    );
                  } else {
                    formattedDate = row.date;
                  }

                  return (
                    <TableRow key={row.id} hover sx={tableRowStyle}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selected.indexOf(row.id) !== -1}
                          onChange={(event) =>
                            handleSelectOneClick(event, row.id)
                          }
                        />
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={row.profilePic}
                          alt={row.user}
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            marginRight: 8,
                          }}
                        />
                        {row.user}
                      </TableCell>
                      <TableCell>{row.project}</TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell>{formattedDate}</TableCell>
                      <TableCell
                        style={getStatusColor(row.status)}
                      >{` • ${row.status}`}</TableCell>
                      <TableCell>
                        {selected.includes(row.id) && (
                          <IconButton onClick={(e) => handleMenuOpen(e, row)}>
                            <MoreVertIcon />
                          </IconButton>
                        )}
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={handleEditOrder}>Edit</MenuItem>
                          <MenuItem onClick={() => handleDeleteOrder(row.id)}>
                            Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalBoxStyle(isDarkMode)}>
          {formError && (
            <Typography color="error" variant="body2" gutterBottom>
              {formError}
            </Typography>
          )}

          <TextField
            label="User"
            required
            value={newOrder.user}
            onChange={(e) => setNewOrder({ ...newOrder, user: e.target.value })}
            fullWidth
            margin="normal"
            helperText="Username must only contain letters"
            sx={modalTextFieldStyle}
          />

          <FormControl fullWidth margin="normal" required sx={formControlStyle}>
            <InputLabel>Status</InputLabel>
            <Select
              value={newOrder.status}
              onChange={(e) =>
                setNewOrder({ ...newOrder, status: e.target.value })
              }
              label="Status"
            >
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Complete">Complete</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Approved">Approved</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Profile Picture"
            required
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setNewOrder({ ...newOrder, profilePic: reader.result });
                };
                reader.readAsDataURL(file);
              }
            }}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            sx={modalTextFieldStyle}
          />

          <TextField
            label="Project"
            required
            value={newOrder.project}
            onChange={(e) =>
              setNewOrder({ ...newOrder, project: e.target.value })
            }
            fullWidth
            margin="normal"
            sx={modalTextFieldStyle}
          />

          <TextField
            label="Address"
            required
            value={newOrder.address}
            onChange={(e) =>
              setNewOrder({ ...newOrder, address: e.target.value })
            }
            fullWidth
            margin="normal"
            sx={modalTextFieldStyle}
          />

          <TextField
            label="Date"
            required
            type="date"
            value={newOrder.date}
            onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            sx={modalTextFieldStyle}
          />
          <Button
            variant="contained"
            color="primary"
            sx={buttonStyle}
            onClick={handleAddOrder}
          >
            {editingOrder ? "Edit" : "Add"}
          </Button>
        </Box>
      </Modal>
      <ToastContainer />
    </Box>
  );
};

export default OrderList;
