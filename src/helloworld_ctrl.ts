import { PanelCtrl } from 'grafana/app/plugins/sdk';
import _ from 'lodash';

export class HelloWorldCtrl extends PanelCtrl {
  static templateUrl = 'partials/module.html';
  panelDefaults = {
    test:  "Hello World"

  }

  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaultsDeep(this.panel, this.panelDefaults);
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('panel-initialized', this.panelinit.bind(this));
    this.events.on('component-did-mount', this.componentdidmount.bind(this));
    this.events.on('refresh', this.refresh.bind(this));
    this.events.on('render', this.render.bind(this));

    

  }


  onInitEditMode() {
    console.log("edit mode")
    this.addEditorTab('Options', 'public/plugins/hello-world-panel/partials/options.html', 2);

  }

  onPanelTeardown() {
    console.log("onPanelTeardown")
  }

  refresh() {
    console.log("refresh")

  }
  render(){
    console.log("render")

  }
  panelinit(){
    console.log("panel init")
  }
  componentdidmount(){
    console.log("component did mount")

  }
 

  link(scope, elem) {
    this.events.on('render', () => {
      console.log("link called")
    });
  }
}
