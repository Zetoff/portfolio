import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Section from '../Section';

class HighlightsBackground extends React.PureComponent {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.container}>
        <Section>
          {children}
        </Section>
      </div>
    );
  }
}

export default withStyles(styles)(HighlightsBackground);
