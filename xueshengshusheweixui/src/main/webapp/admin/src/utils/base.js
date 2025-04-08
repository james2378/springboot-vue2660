const base = {
    get() {
        return {
            url : "http://localhost:8080/xueshengshusheweixui/",
            name: "xueshengshusheweixui",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xueshengshusheweixui/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宿舍报修系统"
        } 
    }
}
export default base
