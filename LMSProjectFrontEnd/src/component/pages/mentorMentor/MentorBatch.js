import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search";
import ButtonComponent from "../../atom/ButtonComponent";
import { Chip, Toolbar, Typography } from "@mui/material";
import "../../../style/button.scss";
import { Input } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@mui/icons-material";
import TableComponent from "../../molicules/TableComponent";
import BatchModal from "../../forms/BatchModal";
import CONSTANTS from "../../constents/Index";
import {
  batchGetAll,
  batchDelete,
} from "../../../services/utils/batch/BarchServices";

function MentorBatch() {
  const [openBatch, setOpenBatch] = useState(false);
  const [batchData, setBatchData] = useState([]);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState([]);
  const [deleteData, setDeleteData] = useState("");
  const [previousFormData, setPreviousFormData] = useState([]);
  const [modalValue, setModalValue] = useState("add");
  const [batchId, setBatchId] = useState("");
  const [defaultFormData, setDefaultFormData] = useState({
    name: "",
    mentorName: "",
    technologies: "",
    startDate: "",
    startDateString: "",
    endDate: "",
    endDateString: "",
  });

  useEffect(() => {
    getTableData();
  }, []);

  const hanldeEditClick = (id) => {
    let data;
    batchData &&
      batchData.map((item, index) => {
        if (index + 1 === id) {
          data = item;
        }
      });
    setPreviousFormData(data);
    console.log("first", data);
    setBatchId(data.id);
    setDefaultFormData({
      name: data.name,
      mentorName: data.mentorName,
      // technologies: data.technologies,
      startDate: data.startDate,
      endDate: data.blog_image_url,
    });
    hanldeEditClick();
    setModalValue("edit");
  };

  const getTableData = async () => {
    const { data, errRes } = await batchGetAll();
    setBatchData(data.data);
    let arrayOfRows = [];
    data &&
      data.data.map((item, index) => {
        arrayOfRows.push({
          col1: index + 1,
          // col1: item.number,
          col2: item.id,
          col3: item.batchName,
          col4: item.mentorName,
          col5: item.technologies.map((ele) => (
            <Chip
              label={ele.tech}
              variant="outlined"
              color="primary"
              sx={{ backgroundColor: "#086288", color: "#FFFFFF" }}
            />
          )),
          col6: item.startDate,
          col7: item.endDate,
          col8: item.status,
        });
      });
    setRows(arrayOfRows);
  };

  const deleteItem = async (id) => {
    let batchId = "";
    batchData.map((item, index) => {
      if (index === id) {
        batchId = item.id;
      }
    });
    console.log("type of", batchId);
    const { data, errRes } = await batchDelete(batchId);
    console.log(data);
    console.log(errRes);
    if (data) {
      getTableData();
    }
  };

  return (
    <div>
      <Toolbar
        sx={{
          p: 0,
        }}
        className="row"
      >
        <Box className="col-6">
          <Typography color={"#FAA81D"}>Batch list</Typography>
        </Box>
        <Box className="col-4 d-flex">
          <Input
            size="default"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Box>
        <Box className="col-2">
          <ButtonComponent
            label="New Batch"
            muiProps="orange"
            fullwidth
            size="small"
            onClick={() => {
              setOpenBatch(true);
            }}
            showIcon={true}
            iconOrintation="start"
            iconName="add"
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        <TableComponent
          tablerow={rows}
          headCells={CONSTANTS.MENTROR_BATCH_HEADER}
          deleteIconClick={(id) => deleteItem(id)}
          editIconClick={(id) => {
            setOpenBatch(true);
          }}
        />
      </div>
      {openBatch && (
        <BatchModal
          getTableData={getTableData}
          openBatch={openBatch}
          setOpenBatch={setOpenBatch}
          defaultFormData={defaultFormData}
          setDefaultFormData={setDefaultFormData}
        />
      )}
    </div>
  );
}

export default MentorBatch;
