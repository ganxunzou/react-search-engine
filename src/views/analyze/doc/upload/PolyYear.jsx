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

class Basic extends React.Component {
  render() {
    const data = [
      
      {
        year: "2009",
        value: 200
      },
      {
        year: "2010",
        value: 240
      },
      {
        year: "2012",
        value: 300
      },
      {
        year: "2013",
        value: 360
      },
      {
        year: "2014",
        value: 370
      },
      {
        year: "2015",
        value: 400
      },
      {
        year: "2016",
        value: 460
      },
      {
        year: "2017",
        value: 550
      },
      {
        year: "2018",
        value: 680
      }
    ];
    const cols = {
      value: {
        min: 0
      },
      year: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="year*value" size={2} />
          <Geom
            type="point"
            position="year*value"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Basic;
