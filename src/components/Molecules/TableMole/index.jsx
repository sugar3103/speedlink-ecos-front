import React, { useState, useEffect } from "react";
import PageNumber from "../../Atom/PageNumber";
import "./index.scss";
import * as $ from "jquery";
import OptionSelect from "../../Atom/OptionSelect";
import Loading from "../../Loading";
import Row from "../../Atom/Row";

function TableMole(props) {
  const [lenEachPage, setLenEachPage] = useState(10);
  const [data, setData] = useState(props.data);
  const [selectedCheckbox, setSelectedCheckBox] = useState([]);
  const [apiPageArray, setApiPageArray] = useState([0]);

  const { currentPage, setCurrentPage } = props;
  let firstItem = currentPage * lenEachPage;
  let lastItem = firstItem + lenEachPage;
  const dataLen = props.dataLength;
  let dataEachPage = data.slice(firstItem, lastItem);

  const styling = {
    textStyle: {
      fontSize: "15px",
      margin: "20px 5px 0 0 "
    },
    customSelect: {
      background: "#232329",
      color: "white",
      verticalAlign: "middle",
      fontSize: "10px"
    },
    cellStyle: {
      Width: "30px"
    },

    checkboxStyle: {
      width: "30px !important"
    }
  };

  const totalPage =
    dataLen % lenEachPage === 0
      ? dataLen / lenEachPage
      : Math.floor(dataLen / lenEachPage) + 1;

  const btnArray =
    totalPage < 5
      ? [...Array(totalPage).keys()]
      : currentPage === 0 || currentPage === 1
      ? [
          currentPage,
          currentPage + 1,
          currentPage + 2,
          currentPage + 3,
          currentPage + 4
        ]
      : currentPage === totalPage - 1 || currentPage === totalPage - 2
      ? [
          currentPage - 4,
          currentPage - 3,
          currentPage - 2,
          currentPage - 1,
          currentPage
        ]
      : [
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2
        ];

  const changeLenEachPage = e => {
    setLenEachPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  const changeCurrentPage = values => {
    setCurrentPage(parseInt(values));
  };

  const forwardCurrentPage = theStep => {
    switch (theStep.step) {
      case "firstPage":
        setCurrentPage(0);
        setApiPageArray([0])
        break;
      case "backPage":
        setCurrentPage(currentPage - 1 < 0 ? currentPage : currentPage - 1);
        break;
      case "nextPage":
        setCurrentPage(
          currentPage + 1 > totalPage - 1 ? currentPage : currentPage + 1
        );
        break;
      case "lastPage":
        setCurrentPage(totalPage - 1);
        setApiPageArray(
          Array.from(
            Array(
              dataLen % props.lenAPI === 0
                ? Math.floor(dataLen / props.lenAPI)
                : Math.floor(dataLen / props.lenAPI) + 1
            ).keys()
          )
        );
        break;
      default:
        break;
    }
  };

  // get all the selected checkbox and slice it from postion 2
  // without slice it would come out like id1, id2,
  const selectedInTable = e => {
    var checkArray = [];

    $("#checkboxAll").change(function() {
      $(":checkbox").prop("checked", $(this).prop("checked"));
      $("#itemList :checkbox:checked").each(function() {
        checkArray.push(
          $(this)
            .attr("id")
            .slice(2)
        );
      });
      setSelectedCheckBox(checkArray);
    });
  };

  const selectBox = e => {
    // select the selected box and add to checkArray
    var checkArray = [];
    $("#itemList :checkbox:checked").each(function() {
      checkArray.push(
        $(this)
          .attr("id")
          .slice(2)
      );
    });
    $("#checkboxAll").prop("checked", false);
    setSelectedCheckBox(checkArray);
  };

  const deleteSelected = e => {
    // select the id in the database to delete the recorded id in it
    alert(
      `Do you really want to delete the selected id ${selectedCheckbox.map(
        ele => ele
      )}`
    );
  };

  // add more page to the apiPage when currentPage is changed
  useEffect(() => {
    const existedPage = apiPageArray.includes(
      Math.floor((currentPage * lenEachPage) / props.lenAPI)
    );
    if (!existedPage) {
      apiPageArray.push(
        (currentPage * lenEachPage) % props.lenAPI === 0
          ? (currentPage * lenEachPage) / props.lenAPI
          : Math.floor((currentPage * lenEachPage) / props.lenAPI)
      );
      const noNaNApiPageArray = apiPageArray.filter(
        value => !Number.isNaN(value)
      );
      setApiPageArray(noNaNApiPageArray);
    }
  }, [currentPage]);

  // get next page from API if the User click over the size of len each item API
  useEffect(() => {
    props.getNextPageFromAPI(apiPageArray[apiPageArray.length - 1]);
  }, [apiPageArray]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <>
      <div className="table-select_box"></div>
      <div className="clear"></div>
      <div className="tableMole-deletebtn-left">
        {selectedCheckbox.length > 0 ? (
          <button
            className="row-action_btn row-action_btn-delete"
            onClick={deleteSelected}
            style={{ margin: "0 0 0 10px", width: "100px" }}
          >
            <span style={{ background: "#862734" }}></span>
            <p>
              <i className="far fa-trash-alt"></i> Delete All
            </p>
          </button>
        ) : (
          <span></span>
        )}
      </div>
      <div className="tableMole-option-right">
        <span style={styling.textStyle}>Show</span>
        <OptionSelect
          onChange={changeLenEachPage}
          arrayOption={[10, 20, 50, 100, 200]}
        />
        <span style={styling.textStyle}>Entries</span>
      </div>
      <div>
        {props.loading ? (
          <div style={{ margin: "-200px 0 0 0 " }}>
            <Loading />
            <p style={{ color: "#9999ff", fontSize: "20px" }}>
              {" "}
              {/* xin lỗi vì mình load dữ liệu hơi lâu, bạn chịu khó đợi xíu nhé! */}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <table
        style={{
          margin: "auto",
          width: "calc(100% - 40px)",
          position: "relative",
          textAlign: "left"
        }}
        className="table-thead-underline"
      >
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                id="checkboxAll"
                onClick={selectedInTable}
              />
            </th>
            {props.tableHeadArray.map(ele => (
              <th
                key={ele}
                // @ts-ignore
                style={styling.cellStyle}
              >
                {ele}
              </th>
            ))}
          </tr>
        </thead>

        <tbody id="itemList">
          {dataEachPage.map((ele, index) => (
            <Row
              {...ele}
              key={index}
              index={index}
              click={() => selectBox(ele.id)}
              openModal={props.openModal}
              columnList={props.columnList}
            />
          ))}
        </tbody>
      </table>
      <div>
        {" "}
        {data.length === 0 ? (
          <p style={{ color: "red", fontSize: "30px" }}>
            Không tìm thấy data nào khớp cả
          </p>
        ) : (
          ""
        )}
      </div>
      <div
        // @ts-ignore
        style={{ float: "left", width: "90%", margin: "0 0 0 20px" }}
      >
        <div style={{ margin: "20px 0 0 0" }}>
          <button
            className="pageNumber-prevNext_btn"
            onClick={() => forwardCurrentPage({ step: "firstPage" })}
            disabled={currentPage === 0 ? true : false}
          >
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="pageNumber-prevNext_btn"
            onClick={() => forwardCurrentPage({ step: "backPage" })}
            disabled={currentPage === 0 ? true : false}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {btnArray.map(ele => (
            <PageNumber
              realPage={ele}
              pageTitle={ele + 1}
              key={ele + 1}
              click={changeCurrentPage}
              className={
                ele === currentPage
                  ? "pageNumber-prevNext_btn select"
                  : "pageNumber-prevNext_btn"
              }
            />
          ))}

          <button
            className="pageNumber-prevNext_btn"
            onClick={() => forwardCurrentPage({ step: "nextPage" })}
            disabled={currentPage === totalPage - 1 ? true : false}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <button
            className="pageNumber-prevNext_btn"
            onClick={() => forwardCurrentPage({ step: "lastPage" })}
            disabled={currentPage === totalPage - 1 ? true : false}
          >
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div style={{ float: "left", margin: "0 0 10px 10px" }}>
          <p>
            Showing {(firstItem + 1).toLocaleString()} to{" "}
            {firstItem + lenEachPage > dataLen
              ? dataLen.toLocaleString()
              : (firstItem + lenEachPage).toLocaleString()}{" "}
            of {dataLen.toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}

export default TableMole;
