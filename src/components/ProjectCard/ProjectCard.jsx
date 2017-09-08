import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import sharpToImgProps from '../../utils/sharpToImgProps';

import styles from './styles';

class ProjectCard extends React.PureComponent {
  static propTypes = {
    project: PropTypes.shape({}),
    classes: PropTypes.shape({}),
    onClick: PropTypes.function,
  };

  handleClick = () => {
    const { onClick, project } = this.props;
    onClick(project.fields.slug);
  };

  render() {
    const { project, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.logoWrapper}>
            <img
              {...sharpToImgProps(project.frontmatter.logo)}
              alt={`logo-${project.frontmatter.project}`}
              className={classes.logo}
            />
          </div>
          <Typography type="body1">{project.frontmatter.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.handleClick}>Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectCard);
