import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

class Areanull extends React.Component {
  render() {
    var data = [
      {
        year: "1999",
        ACME: 123
      },
      {
        year: "2000",
        ACME: 128
      },
      {
        year: "2001",
        ACME: 125,
      },
      {
        year: "2002",
        ACME: 127
      },
      {
        year: "2003",
        ACME: 129,
      },
      {
        year: "2004",
        ACME: 128
      },
      {
        year: "2005",
        ACME: 130
      }
    ];
    var dv = new DataSet.View().source(data);
    dv.transform({
      type: "fold",
      fields: ["ACME"],
      key: "type",
      value: "value"
    });
    const scale = {
      value: {
        alias: "The Share Price in Dollars",
        formatter: function(val) {
          return "$" + val;
        }
      },
      year: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart
          height={40}
          data={dv}
          padding={"auto"}
          scale={scale}
          forceFit
        >
          <Tooltip crosshairs />
          <Geom type="area" position="year*value" color="type" shape="smooth" />
        </Chart>
      </div>
    );
  }
}

export default Areanull;
