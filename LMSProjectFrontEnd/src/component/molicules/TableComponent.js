//

import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import { useState, useEffect } from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SortIcon from "@mui/icons-material/Sort";
import { Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ButtonComponent from "../atom/ButtonComponent";
import { messageService } from "../../services/rxjsServices";

const useStyles = makeStyles({
  tableHeadBg: {
    backgroundColor: "#F0F3F9",
  },
  tableHeadColor: {
    color: "#3c3838",
    fontWeight: "600",
  },
  indeterminateColor: {
    color: "#f50057",
  },
  selectText: {
    fontSize: "8px",
    fontWeight: "bold",
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  select: {
    zIndex: "1000 !important",
    "& .MuiSelect-select": {
      minWidth: "0 !important",
      minHeight: "0 !important",
      width: "0 !important",
      height: "0px !important",
      backgroundColor: "transparent !important",
      position: "absolute",
      bottom: "0px",
      right: "5px",
    },
  },
  deleteIcon: {
    color: "#1976d2",
    // fontSize: "20px",
    cursor: "pointer",
    "&:hover": {
      color: "red",
      // fontSize: "20px",
      cursor: "pointer",
    },
  },
});

function descendingComparator(a, b, orderBy) {
  if (orderBy === "col1") {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  } else {
    if (
      b[orderBy].toString().toLowerCase() < a[orderBy].toString().toLowerCase()
    ) {
      return -1;
    }
    if (
      b[orderBy].toString().toLowerCase() > a[orderBy].toString().toLowerCase()
    ) {
      return 1;
    }
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    filterOption,
    filterselectInitialData,
    setRows,
    tablerow,
    headCells,
    checkBoxSelected,
    showCheckbox,
  } = props;
  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selected, setSelected] = useState(filterselectInitialData);
  useEffect(() => {
    let selectedkeys = Object.keys(selected);
    let filteredarray = [...tablerow];
    selectedkeys.map((val) => {
      if (selected[val].length) {
        let filtered = filteredarray.filter((e) =>
          selected[val].includes(e[val].key ? e[val].key : e[val])
        );
        filteredarray = [...filtered];
      }
    });
    setRows(filteredarray);
    checkBoxSelected([]);
  }, [selected]);

  const handleChange = (event, id) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected({
        ...selected,
        [id]:
          selected[id].length === filterOption[id].length
            ? []
            : filterOption[id],
      });
      return;
    }
    setSelected({ ...selected, [id]: value });
  };

  const handleNameChange = (value, id) => {
    if (value[value.length - 1] === "all") {
      setSelected({
        ...selected,
        [id]:
          selected[id].length === filterOption[id].length
            ? []
            : filterOption[id],
      });
      return;
    }
    setSelected({ ...selected, [id]: value });
  };

  return (
    <TableHead className={classes.tableHeadBg}>
      <TableRow>
        <TableCell sx={{ borderBottom: 0 }} padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
            style={{ visibility: showCheckbox ? "visible" : "hidden" }}
          />
        </TableCell>

        {headCells.map((headCell) => {
          return headCell.filter ? (
            headCell.filter === "select" ? (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? "right" : "left"}
                padding={headCell.disablePadding ? "none" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
                style={{ width: headCell.width ? headCell.width : "auto" }}
                sx={{ borderBottom: 0, fontWeight: 600 }}
                className="fs-12 fw-600"
              >
                {headCell.label}

                <Select
                  multiple
                  value={selected[headCell.id]}
                  onChange={(e) => handleChange(e, headCell.id)}
                  renderValue={() => false}
                  IconComponent={""}
                  variant="standard"
                  className={classes.select}
                >
                  <MenuItem
                    value="all"
                    classes={{
                      root:
                        selected[headCell.id] &&
                        selected[headCell.id].length ===
                          filterOption[headCell.id] &&
                        filterOption[headCell.id].length
                          ? classes.selectedAll
                          : "",
                    }}
                    sx={{ pl: 0 }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        classes={{
                          indeterminate: classes.indeterminateColor,
                        }}
                        checked={
                          filterOption[headCell.id] &&
                          filterOption[headCell.id].length > 0 &&
                          selected[headCell.id] &&
                          selected[headCell.id].length ===
                            filterOption[headCell.id].length
                        }
                        indeterminate={
                          selected[headCell.id] &&
                          selected[headCell.id].length > 0 &&
                          selected[headCell.id] &&
                          selected[headCell.id].length <
                            filterOption[headCell.id].length
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: "fs-14" }}
                      primary="All"
                    />
                  </MenuItem>
                  {filterOption[headCell.id] &&
                    filterOption[headCell.id].map((option) => (
                      <MenuItem key={option} value={option} sx={{ pl: 0 }}>
                        <ListItemIcon>
                          <Checkbox
                            checked={
                              selected[headCell.id] &&
                              selected[headCell.id].indexOf(option) > -1
                            }
                          />
                        </ListItemIcon>
                        <ListItemText
                          classes={{ primary: "fs-14" }}
                          primary={option}
                        />
                      </MenuItem>
                    ))}
                </Select>
              </TableCell>
            ) : (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? "right" : "left"}
                padding={headCell.disablePadding ? "none" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
                style={{ width: headCell.width ? headCell.width : "auto" }}
                sx={{ borderBottom: 0 }}
                className="fs-12 fw-600"
              >
                {headCell.label}
                <FilterAltOutlinedIcon
                  className=""
                  fontSize="small"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                />
                <Menu
                  style={{ width: "100%" }}
                  id="basic-menu"
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Autocomplete
                    fullWidth
                    options={filterOption[headCell.id] || []}
                    getOptionLabel={(option) => option}
                    IconComponent={null}
                    sx={{ width: 150 }}
                    popupIcon={null}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="px-2"
                      />
                    )}
                    onChange={(e, value) => {
                      handleNameChange(value, headCell.id);
                    }}
                  />
                </Menu>
              </TableCell>
            )
          ) : (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ width: headCell.width ? headCell.width : "auto" }}
              sx={{ borderBottom: 0 }}
              className="fs-12 fw-600"
            >
              <TableSortLabel
                active={true}
                direction={
                  headCell.sort && headCell.sort && orderBy === headCell.id
                    ? order
                    : "desc"
                }
                onClick={
                  headCell.sort && headCell.sort
                    ? createSortHandler(headCell.id)
                    : null
                }
                IconComponent={
                  headCell.sort && headCell.sort
                    ? headCell.sortBy === "date"
                      ? SortIcon
                      : SortByAlphaIcon
                    : null
                }
                className={`fw-600 ${classes.tableHeadColor}`}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          );
        })}
        <TableCell
          sx={{ borderBottom: 0, fontWeight: "bold" }}
          align="left"
          padding="none"
          style={{ width: 150 }}
          className="fs-12 fw-600"
        >
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function TableComponent({
  tablerow = [],
  headCells = [],
  filterselectInitialData = [],
  editIconClick = () => {},
  deleteIconClick = () => {},
  handlePreviewClick = () => {},
  handleViewClick = () => {},
  onSelectionChange = () => {},
  showCheckbox = true,
  onAddIndexClick = () => {},
  onMinusIndexClick = () => {},
  previewMenuName = "",
  previewMenuHidden = false,
  showEditAndDelete = true,
  handleApprove = () => {},
  handleReject = () => {},
}) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("col1");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [hoverRow, setHoverRow] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterSelected, setFilterSelected] = useState([]);
  const [filterOption, setFilterOption] = useState([]);
  const [filterHead, setFilterHead] = useState([]);
  const [rows, setRows] = useState(tablerow);
  const [searchText, setSearchText] = useState("");

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const open = Boolean(menuAnchorEl);
  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const classes = useStyles();
  useEffect(() => {
    const subscription = messageService.getMessage().subscribe((val) => {
      setSearchText(val);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    headCells.map((headCell) => {
      if (headCell.filter && headCell.filter) {
        setFilterHead((oldArray) => [...oldArray, headCell.id]);
      }
    });
    setRows(tablerow);
    setSelected([]);
  }, [tablerow]);

  useEffect(() => {
    requestSearch(searchText);
  }, [searchText]);

  const requestSearch = (searchVal) => {
    if (searchVal) {
      const filterData = tablerow.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchVal.toLowerCase());
      });
      setRows(filterData);
    } else {
      setRows(tablerow);
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "desc";
    setOrder(isAsc ? "asc" : "desc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.col1);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%", margin: "10px auto" }}>
      <TableContainer>
        <Table sx={{ minWidth: 1000 }} aria-labelledby="tableTitle">
          <EnhancedTableHead
            rows={rows}
            setRows={setRows}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            setFilterSelected={setFilterSelected}
            filterSelected={filterSelected}
            filterOption={filterOption}
            filterselectInitialData={filterselectInitialData}
            headCells={headCells}
            tablerow={tablerow}
            checkBoxSelected={setSelected}
            showCheckbox={showCheckbox}
            // handleApprove = () => {},
            // handleReject = () => {},
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.col1);
                const labelId = `enhanced-table-checkbox-${index}`;
                let checked;
                return (
                  <TableRow
                    hover
                    key={row.col1}
                    onMouseEnter={() => setHoverRow(index)}
                    onMouseLeave={() => setHoverRow()}
                    onMouseOver={() => setHoverRow(index)}
                  >
                    <TableCell padding="checkbox" sx={{ borderBottom: 0 }}>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        onClick={(event) => handleClick(event, row.col1)}
                        style={{
                          visibility: showCheckbox ? "visible" : "hidden",
                        }}
                      />
                    </TableCell>
                    {Object.entries(row).map(([_, ele], i) => {
                      const type = ["string", "number", "boolean"];
                      // if (!type.includes(typeof ele)) {
                      //   checked = ele.props.checked;
                      // }
                      return (
                        <TableCell
                          key={i}
                          sx={{
                            pt: { lg: 2, sm: 1 },
                            pb: { lg: 1, sm: 1 },
                            borderBottom: 0,
                            wordBreak: "break-all",
                            px: 1,
                          }}
                          align="left"
                          padding="none"
                        >
                          {i === 1 ? (
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0">{ele}</p>
                              <div className="d-flex">
                                <IconButton
                                  onClick={() => {
                                    onAddIndexClick(index);
                                  }}
                                ></IconButton>
                                <IconButton
                                  onClick={() => {
                                    onMinusIndexClick(index);
                                  }}
                                ></IconButton>
                              </div>
                            </div>
                          ) : (
                            <> {ele}</>
                          )}
                        </TableCell>
                      );
                    })}
                    <TableCell
                      sx={{ borderBottom: 0, pl: 0 }}
                      disabled={checked}
                    >
                      {/* {hoverRow === index && ( */}
                      {showEditAndDelete ? (
                        <>
                          <IconButton
                            sx={{ mr: 2, p: 0 }}
                            disabled={checked}
                            onClick={() => {
                              editIconClick(row.col1);
                            }}
                          >
                            <Tooltip title="Edit">
                              <EditOutlinedIcon
                                color="primary"
                                style={{
                                  fontSize: "20px",
                                  cursor: "pointer",
                                  opacity: checked && "0.5",
                                }}
                              />
                            </Tooltip>
                          </IconButton>
                          <IconButton
                            sx={{ mx: 2, p: 0 }}
                            disabled={checked}
                            onClick={() => deleteIconClick(row.col1)}
                          >
                            <Tooltip title="Delete">
                              <DeleteOutlineOutlinedIcon
                                // color="primary"
                                className={classes.deleteIcon}
                                style={{
                                  opacity: checked && "0.5",
                                }}
                              />
                            </Tooltip>
                          </IconButton>
                        </>
                      ) : (
                        <div className="d-flux">
                          <ButtonComponent
                            size="small"
                            variant="outlined"
                            style={{
                              backgroundColor: "#00951E1A",
                              color: "#00811A",
                              padding: "2px",
                              margin: "5px",
                            }}
                            label="Approve"
                            onClick={() => handleApprove(row.col1)}
                          />
                          <ButtonComponent
                            size="small"
                            variant="outlined"
                            style={{
                              backgroundColor: "#B2000C80",
                              color: "#CE000E",
                              margin: "5px",
                            }}
                            label="Reject"
                            onClick={() => handleReject(row.col1)}
                          />
                        </div>
                      )}
                      {/* )} */}
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <div
                style={{
                  height: 53 * emptyRows,
                }}
              ></div>
            )}
          </TableBody>
        </Table>
        {rows.length > 0 && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </TableContainer>
    </Box>
  );
}
