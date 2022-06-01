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

function Batch() {
  const [openBatch, setOpenBatch] = useState(false);
  const [batchData, setBatchData] = useState([]);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState([]);
  const [deleteData, setDeleteData] = useState("");

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    const { data, errRes } = await batchGetAll();
    setBatchData(data.data);
    let arrayOfRows = [];
    data &&
      data.data.map((item, index) => {
        console.log(data);
        arrayOfRows.push({
          col1: index + 1,
          col2: item.number,
          col3: item.batchName,
          col4: item.mentor.mentorName,
          col5: item.technologies.map((ele) => (
            <Chip label={ele} variant="outlined" color="primary" />
          )),
          col6: item.startDate,
          col7: item.endDate,
          col8: item.status,
        });
      });
    setRows(arrayOfRows);
  };

  const handleDeleteIconClick = (id) => {
    if (id) {
      batchData &&
        batchData.map((item, index) => {
          if (index + 1 === id) {
            setDeleteData(item);
          }
        });
    }
  };

  const handleDeleteClick = async () => {
    let payload;
    if (selected.length > 0) {
      const tempData = [];
      selected &&
        selected.map((item) => {
          batchData &&
            batchData.map((ele, index) => {
              if (index + 1 === item) {
                tempData.push(ele);
              }
            });
        });
      const tempBlogId = [];
      tempData &&
        tempData.map((item) => {
          tempBlogId.push(item.blog_id);
        });
      payload = { blog_id: tempBlogId };
    } else {
      payload = { blog_id: deleteData.blog_id };
    }
    const { data, errRes } = await batchDelete(payload);
    if (data) {
      await getTableData();
    } else if (errRes) {
      console.log(errRes.message);
    } else {
      console.log("Something went wrong");
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
        <TableComponent tablerow={rows} headCells={CONSTANTS.BATCH_HEADER} />
      </div>
      {openBatch && (
        <BatchModal
          getTableData={getTableData}
          openBatch={openBatch}
          setOpenBatch={setOpenBatch}
        />
      )}
    </div>
  );
}

export default Batch;
