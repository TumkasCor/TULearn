$( document ).ready(() => {
    $('.ui.dropdown')
        .dropdown()
    ;
    $('#main1 .menu .item')
        .tab({
            context: $('#main1')
        })
    ;

    var editor = CodeMirror.fromTextArea(document.getElementById("text"), {
        lineNumbers: true,
        autoRefresh:true,
        mode: "text/html",
        matchBrackets: true
        });
    var editor2 = CodeMirror.fromTextArea(document.getElementById("text2"), {
        lineNumbers: true,
        autoRefresh:true,
        mode: "text/css",
        matchBrackets: true
    });
    var ifrm = document.getElementById('myIframe');
    ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;

        editor.on('change', function(){ ifrm.document.open();
            ifrm.document.write(editor.getValue() + "<style>"+editor2.getValue()+"<style>");
            ifrm.document.close();
        } );
        editor2.on('change', function(){ ifrm.document.open();
            ifrm.document.write(editor.getValue() + "<style>"+editor2.getValue()+"<style>");
            ifrm.document.close();
        } );

    document.getElementById('lessontext').innerHTML = marked(document.getElementById('lessontext').innerHTML.replace("                    ", ""));

    update = () => {
        ifrm.document.write(editor.getValue() + "<style>"+editor2.getValue()+"<style>");
        ifrm.document.close();
    }
    
})
