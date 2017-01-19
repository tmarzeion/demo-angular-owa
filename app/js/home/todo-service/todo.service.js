export default class ToDo {

    constructor(initialList) {
        this.list = initialList;
    }

    addLine(line) {
        if (!ToDo.isAlreadyInList(this.list, line)) {
            this.list.push(line);
        }
    }

    static isAlreadyInList(list, line) {
        return list.indexOf(line.toLowerCase()) > -1;
    }

}