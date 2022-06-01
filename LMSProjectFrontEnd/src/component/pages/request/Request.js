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
import ReasonRejection from "../../forms/request/ReasonRejection";
import ChangeStatus from "../../forms/request/ChangeStatus";
import { messageService } from "../../../services/rxjsServices";

function Request() {
  const [rows, setRows] = useState([]);
  const [requestData, setRequestData] = useState([]);
  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);
  const [defaultFormData, setDefaultFormData] = useState({
    reason: "",
    empId: "",
  });

  useEffect(() => {
    getTableData();
  }, []);

  // const hanldeEditClick = (id) => {
  //   let data;
  //   blogData &&
  //     blogData.map((item, index) => {
  //       if (index + 1 === id) {
  //         data = item;
  //       }
  //     });
  //   setPreviousFormData(data);
  //   setBlogId(data.blog_id);
  //   setDefaultFormData({
  //     header: data.blog_heading,
  //     category: data.category_name,
  //     categoryID: data.category_id,
  //     bodyObj: EditorState.createWithContent(
  //       ContentState.createFromBlockArray(
  //         htmlToDraft(data.blog_body).contentBlocks
  //       )
  //     ),
  //     image: data.blog_image_url,
  //     description: data.blog_desc,
  //     body: data.blog_body,
  //   });
  //   setCount(data.blog_desc.length);
  //   setSelectedImage(data.blog_image);
  //   setEditorState(data.blog_body);
  //   setCategoryValue({ id: data.category_id, label: data.category_name });
  //   setModalValue("edit");
  //   setModalOpen(true);
  // };

  const getTableData = async () => {
    const { data, errRes } = await requestGetAll();
    console.log(data.data);
    setRequestData(data.data);
    let arrayOfRows = [];
    data &&
      data.data.map((item, index) => {
        if (item.empStatus === "Active") {
          item.educationDetails &&
            item.educationDetails.length > 0 &&
            item.educationDetails.sort((a, b) => a.yop - b.yop);

          arrayOfRows.push({
            col1: index + 1,
            col2: item.empId,
            col3: item.empName,
            col4:
              item.educationDetails &&
              item.educationDetails.length > 0 &&
              item.educationDetails[item.educationDetails.length - 1].yop,
            col5:
              item.educationDetails &&
              item.educationDetails.length > 0 &&
              item.educationDetails[item.educationDetails.length - 1]
                .percentage,
            col6:
              item.experiance &&
              item.experiance.length > 0 &&
              item.experiance[item.experiance.length - 1].eYoe,
            col7:
              item.contact &&
              item.contact.length > 0 &&
              item.contact[item.contact.length - 1].contactNo,
          });
        }
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
            onChange={(e) => messageService.sendMessage(e.target.value)}
          />
        </Box>
      </Toolbar>
      <div classNamw="m-2">
        <TableComponent
          handleApprove={() => {
            setApprove(true);
          }}
          handleReject={(id) => {
            requestData &&
              requestData.map((item, index) => {
                if (index + 1 === id) {
                  setDefaultFormData({ ...defaultFormData, empId: item.empId });
                }
              });
            setReject(true);
          }}
          showEditAndDelete={false}
          tablerow={rows}
          headCells={CONSTANTS.REQUEST_HEADER}
        />
      </div>
      {reject && (
        <ReasonRejection
          reject={reject}
          setReject={setReject}
          defaultFormData={defaultFormData}
          setDefaultFormData={setDefaultFormData}
          rows={rows}
          getTableData={getTableData}
        />
      )}
      {approve && <ChangeStatus approve={approve} setApprove={setApprove} />}
    </div>
  );
}

export default Request;
