export class Util {
  log() {
    console.log("hello word logged from Util");
  }

  onErr(sender, args) {
    console.log("Request failed. " + args.get_message());
    console.log(args.get_stackTrace());
  }

  getWebTitle(url: string) {
    let context: SP.ClientContext = new SP.ClientContext();
    let web: SP.Web = context.get_web();
    context.load(web);
    context.executeQueryAsync(() => {
      console.log("Successfully loaded web and lists", web.get_title());
    }, this.onErr);
  }
}
