import React from "react";
import SearchBox from "../../Atom/SearchBox";
import "./index.scss";

function SearchZone(props) {
  return (
    <form
      style={{ display: "flex", position: "relative" }}
      onSubmit={props.functionSearch}
    >
      <table className="searchZone-table-style">
        <tbody style={{ float: "left", margin: "0 2% 0 2%" }}>
          <tr>
            <th className="searchZone-td-styling">
              <SearchBox
                title={"Name"}
                sublistId="name"
                sublistArray={[
                  "Zone 1",
                  "Zone 2",
                  "Zone 3",
                  "Zone 4",
                  "Zone 5",
                  "Zone 6",
                  "Zone 7",
                  "Zone 8",
                  "Zone 9",
                  "Zone 10",
                  "Zone 11"
                ]}
                placeholder="Customer"
              />
            </th>
            <th className="searchZone-td-styling">
              <SearchBox
                title={"Area Name"}
                sublistId="cityOrigin"
                sublistArray={[
                  "Zone 1",
                  "Zone 2",
                  "Zone 3",
                  "Zone 4",
                  "Zone 5",
                  "Zone 6",
                  "Zone 7",
                  "Zone 8",
                  "Zone 9",
                  "Zone 10",
                  "Zone 11",
                  "Zone 1",
                  "Zone 2",
                  "Zone 3",
                  "Zone 4",
                  "Zone 5",
                  "Zone 6",
                  "Zone 7",
                  "Zone 8",
                  "Zone 9",
                  "Zone 10",
                  "Zone 11"
                ]}
                placeholder="Area Name"
              />
            </th>
            <th className="searchZone-td-styling">
              <SearchBox
                title={"Zone Name"}
                sublistId="cityDestination"
                sublistArray={["City Des 1", "City Des 2"]}
                placeholder="Zone Name"
              />
            </th>
            <th className="searchZone-td-styling">
              <SearchBox
                title={"City (Origin)"}
                sublistId="districtDestination"
                sublistArray={["District Des 1", "District Des 2"]}
                placeholder="City"
              />
            </th>
          </tr>
          <tr>
            <th className="searchZone-td-styling">
              <SearchBox
                title={"City (Destination)"}
                sublistId="wardDestination"
                sublistArray={["Ward Des 1", "Ward Des 2"]}
                placeholder="City"
              />
            </th>
            <th className="searchZone-td-styling">
              <SearchBox
                title={"District (Destination)"}
                sublistId="customer"
                sublistArray={["Customer 1", "Customer 2"]}
                placeholder="District"
              />
            </th>
            <th className="searchZone-td-styling">
              <SearchBox
                title={"Ward (Destination)"}
                sublistId="customer"
                sublistArray={["Customer 1", "Customer 2"]}
                placeholder="Ward"
              />
            </th>
          </tr>
        </tbody>
      </table>
      <button type="submit" className="searchZone-btn-search">
        <span style={{ background: "#0b4380" }}></span>
        <p>Search</p>
      </button>
      <span>
        <button
          type="reset"
          onClick={props.clearSearch}
          className="searchZone-clear-search"
        >
          <span style={{ background: "white" }}></span>
          <p>Clear</p>
        </button>
      </span>
    </form>
  );
}

export default SearchZone;
