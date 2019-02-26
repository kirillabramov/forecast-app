import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import PropTypes from 'prop-types';
import _ from 'lodash';

const average = data => {
  return _.round(_.sum(data) / data.length);
};

const Chart = ({ data, color, units }) => {
  return (
    <React.Fragment>
      <Sparklines data={data} svgWidth={250} svgHeight={100}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)}

        {units}
      </div>
    </React.Fragment>
  );
};

Chart.propTypes = {
  data: PropTypes.instanceOf(Array),
  color: PropTypes.string,
  units: PropTypes.string
};
Chart.defaultProps = {
  data: [],
  color: '',
  units: ''
};

export default Chart;
