
if (document.URL.slice(-5) == "ipynb") {
    var url = ("http://nbviewer.ipython.org/github" +
               document.URL.replace(/https?:\/\/github\.com/, ""));
    window.location.replace(url);
}
