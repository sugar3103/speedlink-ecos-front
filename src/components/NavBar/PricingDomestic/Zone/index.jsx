import React, { useState, useEffect } from "react";
import axios from "axios";
import * as $ from "jquery";
import TableMole from "../../../Molecules/TableMole";
import PageTitle from "../../../Atom/PageTitle";
import SearchBox from "../../../Atom/SearchBox";
import Modal from "../../../Atom/Modal";
import "./index.scss";
import dataFromJson from "../../../../data.json";

function ZoneDomestic(props) {
  const [originData, setOriginData] = useState([]);
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [lenAPI, setLenAPI] = useState(0);
  const [loadingState, setLoadingState] = useState(true);
  const [searchState, setSearchState] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // const firstTimeGetDataFromAPI = () => {
  //   axios
  //     .post("http://api-pricing-int.local/api/v1/pricing/domestic")
  //     .then(function(respone) {
  //       setData(respone.data.data);
  //       setOriginData(respone.data.data);
  //       setDataLength(respone.data.data.length);
  //       setLoadingState(false);
  //     });
  //   // axios.get("/api/test_ecos_total").then(function(respone) {
  //   //   setLoadingState(true);
  //   //   setDataLength(respone.data.rows[0].ecosCount);
  //   //   setLenAPI(respone.data.rowEachPage);
  //   //   setLoadingState(false);
  //   // });
  // };

  const firstTimeGetDataFromAPI = () => {
    setData(dataFromJson.data);
    setOriginData(dataFromJson.data);
    setDataLength(dataFromJson.data.length)
    setLoadingState(false)

    // axios.get("/api/test_ecos_total").then(function(respone) {
    //   setLoadingState(true);
    //   setDataLength(respone.data.rows[0].ecosCount);
    //   setLenAPI(respone.data.rowEachPage);
    //   setLoadingState(false);
    // });
  };

  const getNextPageFromAPI = pages => {
    // setLoadingState(true);
    // axios.get(`/api/test_ecos_${pages}`).then(function(respone) {
    //   Array.prototype.push.apply(data, respone.data);
    //   console.log("get dat from API sucess + pushed to array");
    //   setData(data);
    //   setOriginData(respone.data);
    //   setLoadingState(false);
    //   setSearchState(false);
    // });
  };

  useEffect(() => {
    firstTimeGetDataFromAPI();
  }, []);

  const functionSearch = e => {
    // search any where in the data that have any of the input text
    // by changing the ["name"] to [key] will result in search all the data
    e.preventDefault();
    var titles = [];
    $("input[name^=search]").each(function() {
      titles.push($(this).val());
    });
    const searchItem = titles.map(ele => ele.toLowerCase());
    const newData = data.filter(item => {
      return Object.keys(item).some(
        key =>
          item["name_vn"].toLowerCase().includes(searchItem[0]) &&
          item["name_eng"].toLowerCase().includes(searchItem[1]) &&
          item["description_vn"].toLowerCase().includes(searchItem[2])
        // item["districtDestination"].toLowerCase().includes(searchItem[3]) &&
        // item["wardDestination"].toLowerCase().includes(searchItem[4]) &&
        // item["customer"].toLowerCase().includes(searchItem[5])
      );
    });
    setData(newData);
    setCurrentPage(0);
    setSearchState(true);
  };

  const clearSearch = e => {
    setData(originData);
    setSearchState(false);
    setCurrentPage(0);
    firstTimeGetDataFromAPI();
    var elems = document.getElementsByTagName("input");
    var l = elems.length;
    for (var i = 0; i < l; ++i) {
      elems[i].value = "";
    }
  };

  useEffect(() => {
    const autoChangeDataLen = () => {
      if (searchState) {
        setDataLength(data.length);
      }
    };
    autoChangeDataLen();
  }, [data, searchState]);

  // open the Modal when click with id in e
  const openModal = e => {
    console.log("open modal clicked with ID:", e.modalId);
    var modal = document.getElementById(e.modalId);
    modal.style.display = "block";
  };

  // close the currently opened Modal
  window.onclick = function(event) {
    var modalClass = document.getElementsByClassName("modal");
    for (let i = 0; i < modalClass.length; i++) {
      if (event.target === modalClass[i]) {
        modalClass[i].style.display = "none";
      }
    }
  };

  return (
    <>
      <div className="container" id="container">
        <PageTitle pageTitle={"Zone Domestic"} />
        <form
          style={{ display: "flex", position: "relative" }}
          onSubmit={functionSearch}
        >
          <table className="searchBox-zone-table-style">
            <tbody style={{ float: "left", margin: "0 2% 0 2%" }}>
              <tr>
                <th className="searchBox-zone-td-styling">
                  <SearchBox
                    title={"Type Zone"}
                    sublistId="type-zone"
                    sublistArray={["Customer", "Public"]}
                    placeholder="Type Zone"
                  />
                </th>
                <th className="searchBox-zone-td-styling">
                  <SearchBox
                    title={"Customer"}
                    sublistId="customer"
                    sublistArray={["FHS Best Fr", "Sendo Close Fr"]}
                    placeholder="Customer"
                  />
                </th>
                <th className="searchBox-zone-td-styling">
                  <SearchBox
                    title={"Zone Name"}
                    sublistId="zoneName"
                    sublistArray={["Zone 1", "Zone 2"]}
                    placeholder="Zone Name"
                  />
                </th>
              </tr>
              <tr>
                <th className="searchBox-zone-td-styling">
                  <SearchBox
                    title={"Category"}
                    sublistId="category"
                    sublistArray={["Import", "Export"]}
                    placeholder="Category"
                  />
                </th>
                <th className="searchBox-zone-td-styling">
                  <SearchBox
                    title={"Carrier"}
                    sublistId="wardDestination"
                    sublistArray={["SPL", "DHL", "Fedex"]}
                    placeholder="Carrier"
                  />
                </th>
                <th className="searchBox-zone-td-styling">
                  <SearchBox
                    title={"Service"}
                    sublistId="service"
                    sublistArray={["Ecommerce", "Service 2"]}
                    placeholder="District"
                  />
                </th>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="searchBox-btn-search">
            <span style={{ background: "#0b4380" }}></span>
            <p>Search</p>
          </button>
          <span>
            <button
              type="reset"
              onClick={clearSearch}
              className="searchBox-clear-search"
            >
              <span style={{ background: "white" }}></span>
              <p>Clear</p>
            </button>
          </span>
        </form>
        {/* Button to create and import */}
        <div className="zone-btn-left">
          <button
            className="zone-createZone-btn"
            onClick={() => openModal({ modalId: "create-new-zone" })}
          >
            <span style={{ background: "#186328" }}></span>
            <p>Create New Zone</p>
          </button>
          <button
            className="zone-import-btn"
            onClick={() => openModal({ modalId: "export-new-zone" })}
          >
            <span style={{ background: "#0b4380" }}></span>
            <p>Export</p>
          </button>
        </div>
        {/* The modal for the button create and import */}
        <Modal
          modalId={"create-new-zone"}
          title={
            "Create New Zone Create New Zone Create New Zone Create New Zone"
          }
        />
        <Modal
          modalId={"export-new-zone"}
          title={"Export Export Export Export Export Export "}
        />
        {/* The main table of the view */}
        <TableMole
          data={data}
          loading={loadingState}
          lenAPI={lenAPI}
          dataLength={dataLength}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          openModal={openModal}
          tableHeadArray={[
            "#",
            "Zone Name",
            "Type Zone",
            "Customer",
            "Category",
            "Carrier",
            "Service",
            "Line Quantity",
            "Action"
          ]}
          getNextPageFromAPI={getNextPageFromAPI}
          columnList={[
            "id",
            "name_vn",
            "name_eng",
            "zone_code",
            "customer_id",
            "created_by",
            "modify_by",
            "date_created"
          ]}
        />
      </div>
    </>
  );
}

export default ZoneDomestic;
