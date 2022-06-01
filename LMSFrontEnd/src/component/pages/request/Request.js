import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Chip, Toolbar, Typography } from "@mui/material";
import "../../../style/button.scss";
import { Input } from "antd";
import { SearchOutlined } from "@mui/icons-material";
import TableComponent from "../../molicules/TableComponent";
import BatchModal from "../../forms/BatchModal";
import CONSTANTS from "../../constents/Index";
import { requestGetAll } from "../../../services/utils/request/requestServices";

function Request() {
  const [rows, setRows] = useState([]);
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    const { data, errRes } = await requestGetAll();
    setRequestData(data.data);
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
  return (
    <div>
      <Toolbar
        sx={{
          p: 0,
        }}
        className="row"
      >
        <Box className="col-8">
          <Typography color={"#FAA81D"}>Request list</Typography>
        </Box>
        <Box className="col-4">
          <Input
            size="default"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        <TableComponent tablerow={rows} headCells={CONSTANTS.REQUEST_HEADER} />
      </div>
    </div>
  );
}

export default Request;
