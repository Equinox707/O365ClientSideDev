import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './CrudWebPart.module.scss';
import * as strings from 'crudWebPartStrings';
import { ICrudWebPartWebPartProps } from './ICrudWebPartWebPartProps';


import NewsService from './NewsService';
import { NewsItem } from "./Lists";

export default class CrudWebPartWebPart extends BaseClientSideWebPart<ICrudWebPartWebPartProps> {
public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.crudWebPart}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint Framework!</span>              
              <p class="ms-font-l ms-fontColor-white">${escape(this.properties.description)}</p>
              <p class="ms-font-l ms-fontColor-white">Loading from ${escape(this.context.pageContext.web.title)}</p>
              <a href="#" id="btnGetById" class="${styles.button}">
                <span class="${styles.label}">Get by ID</span>
              </a>
              <a href="insertItem()" class="${styles.button}">
                <span class="${styles.label}">Insert Item</span>
              </a>
              <a href="updateItem(1)" class="${styles.button}">
                <span class="${styles.label}">Update Item</span>
              </a>
              <a href="deleteItem()" class="${styles.button}">
                <span class="${styles.label}">Delete Item</span>
              </a>
            </div>
          </div>
        </div>  
        <div id="spListContainer" />
      </div>`;
      
      this.attachHandlers();
      this.getFullNewsList();
  }

  private attachHandlers(){
    this.domElement.querySelector('#btnGetById').addEventListener('click', ()=>{ this.getItemByID();});
  }

  private getFullNewsList(): void {
    NewsService.getAll(this.context).then((data: NewsItem[])=>{
      this.renderNewsList(data);
    });
  }

  public getItemByID(): void{
    console.info("getItemByID called");
    NewsService.getById("1", this.context).then((data: NewsItem[])=>{
      console.log("getItemByID -> received:");
      console.log(data);
       this.renderNewsList(data);
    });
  }

  private insertItem():void{
   
  }

  private updateItem(item:NewsItem):void{
    
  }

  private deleteItem():void{

    //this.renderNewsList(data);
  }

  private renderNewsList(items: NewsItem[]): void {
    let html: string = '';
    items.forEach((item: NewsItem) => {
      html += `
		<ul class="${styles.list}">
			<li class="${styles.listItem}">
				<span class="ms-font-l">${item.Title}</span>
			</li>
		</ul>`;
    });

    const listContainer: Element = this.domElement.querySelector('#spListContainer');
    listContainer.innerHTML = html;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                }),
                PropertyPaneTextField('test', {
                  label: 'Multi-line Text Field',
                  multiline: true
                }),
                PropertyPaneCheckbox('test1', {
                  text: 'Checkbox'
                }),
                PropertyPaneDropdown('test2', {
                  label: 'Dropdown',
                  options: [
                    { key: '1', text: 'One' },
                    { key: '2', text: 'Two' },
                    { key: '3', text: 'Three' },
                    { key: '4', text: 'Four' }
                  ]
                }),
                PropertyPaneToggle('test3', {
                  label: 'Toggle',
                  onText: 'On',
                  offText: 'Off'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
