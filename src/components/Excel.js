import { render } from "@testing-library/react";
import React, { useState } from "react";
import {OutTable, ExcelRenderer} from "react-excel-renderer";

export class Excel extends React.Component {

    state = {
        rows:"",
        cols: ""
    }

    fileHandler = (event) =>{
        let fileObj = event.target.files[0];

        ExcelRenderer(fileObj, (err, resp) => {
            if(err){
                console.log(err);
            }
            else{
                this.setState({
                    cols: resp.cols,
                    rows: resp.rows
                });
            }
        });
    }

  render(){

  return (
    <div >

    <input className="div1" type="file" onChange={this.fileHandler.bind(this)} style={{"padding": "20px"}}/>
    <div>
        {this.state.rows && <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />}
    </div>

    </div>
  );
}
}

export default Excel;