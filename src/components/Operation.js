import React from 'react';

const Operation = () => (
  <div className="tab-content">
    <div id="menu1" className="tab-pane fade active in">
      <h3>Menu 1</h3>
      <p>Some content in menu 1.</p>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-info next-step">Next <i className="fa fa-chevron-right" /></button></li>
      </ul>
    </div>
    <div id="menu2" className="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Some content in menu 2.</p>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-default prev-step"><i className="fa fa-chevron-left" /> Back</button></li>
        <li><button type="button" className="btn btn-info next-step">Next <i className="fa fa-chevron-right" /></button></li>
      </ul>
    </div>
    <div id="menu3" className="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Some content in menu 3.</p>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-default prev-step"><i className="fa fa-chevron-left" /> Back</button></li>
        <li><button type="button" className="btn btn-info next-step">Next <i className="fa fa-chevron-right" /></button></li>
      </ul>
    </div>
    <div id="menu4" className="tab-pane fade">
      <h3>Menu 4</h3>
      <p>Some content in menu 4.</p>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-default prev-step"><i className="fa fa-chevron-left" /> Back</button></li>
        <li><button type="button" className="btn btn-info next-step">Next <i className="fa fa-chevron-right" /></button></li>
      </ul>
    </div>
    <div id="menu5" className="tab-pane fade">
      <h3>Menu 5</h3>
      <p>Some content in menu 5.</p>
      <ul className="list-unstyled list-inline pull-right">
        <li><button type="button" className="btn btn-default prev-step"><i className="fa fa-chevron-left" /> Back</button></li>
        <li><button type="button" className="btn btn-success"><i className="fa fa-check" /> Done!</button></li>
      </ul>
    </div>
  </div>
)

export default Operation;
