import {Component} from '@angular/core';

@Component({
	selector: 'usuario-overview',
	moduleId: module.id,
	templateUrl: 'usuario-overview.component.html',
	styles: [
	`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .content {
      display: flex;
      flex: 1;
    }
    usuario-list {
      flex: 1;
    }
    h1 {
      font-weight: 300;
    }
    usuario-overview {
      width: 33%;
      max-width: 300px;
      background: #cccccc;
      z-index: 0;
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 18px;
      background: #37474F;
      color: #fff;
      height: 64px;
    }
    .toolbar img {
      margin-left: 12px;
    }
    .toolbar span {
      flex: 1;
      text-align: right;
      font-size: 14px;
      color: #80cbc4;
    }
    #dialog {
      display: block;
      padding: 16px 32px;
      border: 1px solid #ccc;
      position: absolute;
      top: 0;
      margin: 0;
      width: 80vw;
      height: 100vh;
      z-index: 0;
    }
    usuario-form {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0 !important;
      padding: 0 !important;
    }
    @media (max-width: 600px) {
      paper-dialog {
        width: 100vw;
      }
    }
    @media (max-width: 960px) {
      overview-panel {
        display: none;
      }
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 18px;
      }
    }
  `

	]
})

export class UsuarioOverviewComponent {}