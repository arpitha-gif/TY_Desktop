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
// import batchGetAll from "../../../services/util/batch/BatchServices";
import CONSTANTS from "../../constents/Index";
import AdminMentorModel from "../../forms/login/adminMentorModel/AdminMentorModel";
import { adminMentorGetAll } from "../../../services/utils/admin-mentor/AdminMentorServices";

function AdminMentor() {
  const [openMentor, setOpenMentor] = useState(false);
  const [mentorData, setMentorData] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    const { data, errRes } = await adminMentorGetAll();
    setMentorData(data.data);
    let arrayOfRows = [];
    data && console.log(data);
    data.data.map((item, index) => {
      console.log(data);
      arrayOfRows.push({
        col1: item.id,
        col2: item.mentorName,
        col3: item.empId,
        col4: item.email,
        col5: item.technologies.map((ele, index) => (
          <Chip
            label={ele.tech}
            variant="outlined"
            sx={{ backgroundColor: "#086288", color: "#FFFFFF" }}
          />
        )),
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
        <Box className="col-6">
          <Typography color={"#FAA81D"}>Mentors list</Typography>
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
            label="New Mentor"
            muiProps="orange"
            fullwidth
            size="small"
            onClick={() => {
              setOpenMentor(true);
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
          headCells={CONSTANTS.ADMIN_MENTOR_HEADER}
        />
      </div>
      {openMentor && (
        <AdminMentorModel
          getTableData={getTableData}
          openMentor={openMentor}
          setOpenMentor={setOpenMentor}
        />
      )}
    </div>
  );
}

export default AdminMentor;
