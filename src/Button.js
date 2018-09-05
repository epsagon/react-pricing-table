import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  disabled: false
};


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    var buttonColor =this.props.color;
     Array.from(document.getElementsByClassName('button-submit')).forEach(
       function(element) {
        element.style.backgroundColor=buttonColor;
      }
    );
  }

  render() {
    const {onClick, className, children, disabled } = this.props;
    return (
       <button type="button" onClick={onClick} className={className} disabled={disabled}>{children}</button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
