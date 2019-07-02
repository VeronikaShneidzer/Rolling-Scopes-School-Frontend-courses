class Notification {
    constructor() {
      this.countOfNotes = 6;
      this.arrOfEnableNotes = [];
      this.currentNote = 0;
      this.currentDotId = 0;
      this.notificationContainer;
      this.notesCollection = {
        "0": {
          "connection": "enable",
          "caption": "Email tip of the day",
          "content": "<p>More than 60% of emails we send do not require a response.</p><p>Use \"no response needed\" to make sure resipients know that a response is unnecessary.</p>",

        },
        "1": {
          "caption": "Boolean",
          "content": "<p>The Boolean object is an object wrapper for a boolean value.</p>",
          "connection": "enable"
        },
        "2": {
          "caption": "Symbol",
          "content": "Optional, string. A description of the symbol which can be used for debugging but not to access the symbol itself.",
          "connection": "enable"
        },
        "3": {
          "caption": "null",
          "content": "<p>The value null represents the intentional absence of any object value.</p><p>It is one of JavaScript\"s primitive values.</p>",
          "connection": "enable"
        },
        "4": {
          "caption": "undefined",
          "content": "<p>The global undefined property represents the primitive value undefined.</p><p>It is one of JavaScript\"s primitive types.</p>",
          "connection": "enable"
        },
        "5": {
          "caption": "Array",
          "content": "<p>The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.</p>",
          "connection": "enable"
        },
        "6": {
          "caption": "Object",
          "content": "<p>The Object constructor creates an object wrapper for the given value. </p>",
          "connection": "enable"
        },
        "7": {
          "caption": "String",
          "content": "<p>The String global object is a constructor for strings or a sequence of characters.</p>",
          "connection": "enable"
        },
        "8": {
          "caption": "RegExp",
          "content": "<p>The RegExp constructor creates a regular expression object for matching text with a pattern.</p>",
          "connection": "enable"
        },
        "9": {
          "caption": "Number",
          "content": "<p>The Number JavaScript object is a wrapper object allowing you to work with numerical values.</p><p>A Number object is created using the Number() constructor.</p>",
          "connection": "enable"
        },
        "10": {
          "caption": "NaN",
          "content": "<p>The global NaN property is a value representing Not-A-Number.</p>",
          "connection": "enable"
        }
      };
    }

    start() {
      this.notificationContainer = document.getElementById("notification");
      this.notificationContainer.style.display = "block";

      this.notificationContainer.focus();

      this.close();
      this.setNotesInlocalStorage();
      this.createNotes();
      this.removeNote();
      this.loopNotes();
    }

    close() {
      let self = this;
      const closeButton = document.getElementById("closeButton");

      function closeFunc() {
        self.notificationContainer.style.display = "none";
      }

      closeButton.addEventListener("click", closeFunc);

      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) closeFunc();
      });
    }

    setNotesInlocalStorage() {
      for (let key in this.notesCollection) {
        let temp = JSON.parse(localStorage.getItem(key));

        if (temp == null && this.notesCollection[key]["connection"] == "enable") {
          let temp1 = JSON.stringify(this.notesCollection[key]);
          localStorage.setItem(key, temp1);
        }
      }
    }

    createNotes() {
      this.arrOfEnableNotes = [];

      for (let key in this.notesCollection) {
        let temp = JSON.parse(localStorage.getItem(key));

        if (temp["connection"] == "enable") {
          this.arrOfEnableNotes.push(key);
        }
      }

      let arrOfNotes = this.arrOfEnableNotes;

      if (arrOfNotes.length < this.countOfNotes) {
        this.countOfNotes = arrOfNotes.length;
      }

      if (this.countOfNotes == 0) {
        this.notificationContainer.style.display = "none";
      }
      console.log(this.countOfNotes);
      arrOfNotes.sort(function compareRandom(a, b) {
        return Math.random() - 0.5;
      });

      this.arrOfEnableNotes = arrOfNotes;
      this.currentNote = this.arrOfEnableNotes[0];

      for (let i = 0; i < this.countOfNotes; i++) {
        let note = document.createElement("div");
        note.className = "note";
        note.id = '' + arrOfNotes[i];
        document.getElementById("noteHTMLCollection").appendChild(note);

        let caption = document.createElement("h2");
        caption.className = "noteCaption";
        note.appendChild(caption);

        let content = document.createElement("div");
        content.className = "noteContent";
        note.appendChild(content);

        let noteCaption = document.getElementsByClassName("noteCaption")[i];
        let noteContent = document.getElementsByClassName("noteContent")[i];

        // I use innerHTML because text in content of note use 2 paragraphs.
        noteCaption.textContent = this.notesCollection[arrOfNotes[i]]["caption"];
        noteContent.innerHTML = this.notesCollection[arrOfNotes[i]]["content"];
      }
    }

    removeNote() {
      let self = this;

      const disableTips = document.getElementById("disableTips");
      const disableLabel = document.getElementById("disableLabel");

      disableLabel.addEventListener("mouseover", function() {
        document.getElementById("disableTips").checked = true;
      });

      disableLabel.addEventListener("mouseout", function() {
        document.getElementById("disableTips").checked = false;
      });

      function removeFunc() {
        let currNote = document.getElementById(self.currentNote);
        let temp = JSON.parse(localStorage.getItem(currNote.id));

        temp["connection"] = "disable";
        localStorage.removeItem(currNote.id);

        temp = JSON.stringify(temp);
        localStorage.setItem(currNote.id, temp);

        document.getElementById("disableTips").checked = false;
        self.createNotes();
        self.loopNotes();

        return self;
      }

      disableTips.addEventListener("click", removeFunc);

      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 46) removeFunc();
      });
    }

    loopNotes() {
      let self = this;
      const dotContainer = document.getElementById("dotContainer");
      dotContainer.innerHTML = "";

      let dotList = document.createElement("ul");
      dotList.className = "dotList";
      dotContainer.appendChild(dotList);

      for (let i = 0; i < self.countOfNotes; i++) {
        let dot = document.createElement("li");
        dot.className = "dot";
        dot.innerHTML = "<i class=\"fas fa-circle\"></i>";
        dotList.appendChild(dot);
      }

      let notes = document.getElementsByClassName("note");
      let dots = document.getElementsByClassName("dot");
      notes[self.currentDotId].style.display = "block";
      dots[self.currentDotId].className = "dot active";

      const leftArrow = document.getElementById("arrowLeft");
      const rightArrow = document.getElementById("arrowRight");

      function leftClick() {
        if (self.currentDotId == 0) {
          self.currentDotId = self.countOfNotes - 1;
          dots[self.currentDotId].className = "dot active";
          dots[0].className = "dot";
          notes[0].style.display = "none";
          notes[self.currentDotId].style.display = "inline-block";
        }
        else {
          self.currentDotId--;
          dots[self.currentDotId].className = "dot active";
          dots[self.currentDotId + 1].className = "dot";
          notes[self.currentDotId + 1].style.display = "none";
          notes[self.currentDotId].style.display = "inline-block";
        }
      }

      function rightClick() {
        if (self.currentDotId == self.countOfNotes - 1) {
          self.currentDotId = 0;
          dots[self.currentDotId].className = "dot active";
          dots[self.countOfNotes - 1].className = "dot";
          notes[self.countOfNotes - 1].style.display = "none";
          notes[self.currentDotId].style.display = "inline-block";
        }
        else {
          self.currentDotId++;
          dots[self.currentDotId].className = "dot active";
          dots[self.currentDotId - 1].className = "dot";
          notes[self.currentDotId - 1].style.display = "none";
          notes[self.currentDotId].style.display = "inline-block";
        }
      }

      leftArrow.addEventListener("click", leftClick);

      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 40 || e.keyCode == 37) leftClick();
      });

      rightArrow.addEventListener("click", rightClick);

      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 38 || e.keyCode == 39) rightClick();
      });
    }
}

function initialize() {
    let notification = new Notification();
    notification.start();
}

window.onload = setTimeout(function() {
    initialize();
}, 5000);
