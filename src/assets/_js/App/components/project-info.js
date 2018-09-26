import React, {PureComponent} from 'react';

export default class ProjectInfo extends PureComponent {

  render() {
    const {info} = this.props;
    return (
      <div className="mapTooltip active">
        <a href={info.url} class="mapNav">
          <img src={info.logo} alt={info.name}/>
        </a>
      </div>
    );
  }
}