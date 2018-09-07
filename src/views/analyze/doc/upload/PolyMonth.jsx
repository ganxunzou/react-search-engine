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
        year: "01",
        value: 10
      },
      {
        year: "02",
        value: 20
      },
      {
        year: "03",
        value: 30
      },
      {
        year: "04",
        value: 36
      },
      {
        year: "05",
        value: 42
      },
      {
        year: "06",
        value: 50
      },
      {
        year: "07",
        value: 56
      },
      {
        year: "08",
        value: 62
      },
      {
        year: "09",
        value: 80
      },
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
