import React from 'react'
class Footer extends React.Component {
  render() {
    const year = (new Date()).getFullYear().toString();
    const month = (new Date()).getMonth().toString();
    const day = (new Date()).getDate().toString();
    const hour = (new Date()).getHours().toString();
    const minute = (new Date()).getMinutes().toString();

    return (
      <div className = "footer">
        <h1 className = "footer-text">Login Time {hour}:{minute} {month}/{day}/{year}</h1>
      </div>
    )
  }
}
export default Footer
