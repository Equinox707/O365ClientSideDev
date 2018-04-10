import {NewsItem} from './Lists';
import { Environment, EnvironmentType} from '@microsoft/sp-core-library';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { IWebPartContext } from "@microsoft/sp-webpart-base/lib";

export default class NewsService  {

    public static listName:string = "News";

    private static mockItems: NewsItem[] = [{ Title: 'Mock News 1', Id: '1' },
                                        { Title: 'Mock News 2', Id: '2' },
                                        { Title: 'Mock News 3', Id: '3' }];

    public static getAll(ctx:IWebPartContext): Promise<NewsItem[]>{
        var result : Promise<NewsItem[]>;
        
         if (Environment.type === EnvironmentType.Local) {
            result = new Promise<NewsItem[]>((resolve)=>{
                resolve(this.mockItems);
            });
        }
        else if (Environment.type == EnvironmentType.SharePoint || Environment.type == EnvironmentType.ClassicSharePoint) {
            this.doServerQuery(`/_api/web/lists/getByTitle('${this.listName}')/items`, ctx).then((data)=>{
                console.log(data);
            })
        }
        return result;
    }

    public static doServerQuery(query:string, ctx: IWebPartContext): Promise<NewsItem[]>{
        var result : Promise<NewsItem[]>;
        ctx.spHttpClient.get(ctx.pageContext.web.absoluteUrl + query, SPHttpClient.configurations.v1).then((data ) => {                      
            result = new Promise<NewsItem[]>((resolve)=>{
                        resolve(data.json());
            });
        });
        return result;
    };
            
    

    public static getById(id:string, ctx:IWebPartContext): Promise<NewsItem[]>{
        var result : Promise<NewsItem[]>;
         if (Environment.type === EnvironmentType.Local) {
            result = new Promise<NewsItem[]>((resolve)=>{
                var searched = this.mockItems.filter((item)=>{return item.Id==id;});
                resolve(searched);
            });
        }
        else if (Environment.type == EnvironmentType.SharePoint || Environment.type == EnvironmentType.ClassicSharePoint) {
            ctx.spHttpClient.get(ctx.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
                .then((response: SPHttpClientResponse ) => {
                      result = new Promise<NewsItem[]>((resolve)=>{
                        resolve(response.json());
                    });
                });
            }
        return result;
    }

    public static insert(item:NewsItem, ctx:IWebPartContext):NewsItem[]{

        return this.mockItems;
    }

    public static update(item:NewsItem, ctx:IWebPartContext):NewsItem[]{

        return this.mockItems;
    }

    public static delete(id: string, ctx:IWebPartContext):NewsItem[]{

        return this.mockItems;
    }
}