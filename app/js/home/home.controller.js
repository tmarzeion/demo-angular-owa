class HomeController {

  constructor(ToDo) {
    this.ToDo = ToDo;
    this.list = ToDo.list;
    this.newLine = '';
    this.hello = "Hello! :)"
  }

  addLine() {
    this.ToDo.addLine(this.newLine);
    this.newLine = '';
  }

  todos() {
    return this.list;
  }

}

export default HomeController;
