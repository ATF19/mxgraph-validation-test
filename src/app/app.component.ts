import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('graphContainer') graphContainer: ElementRef;

  
  ngAfterViewInit() {
    const graph = new mxGraph(this.graphContainer.nativeElement);
    //window.Graph = graph;
    //this.loadScript('../assets/js/Shapes.js');    
    

    
    try {
      const parent = graph.getDefaultParent();
      graph.gridEnabled = true;
      graph.gridSize = 4;
      graph.getModel().beginUpdate();

      const vertex1 = graph.insertVertex(parent, '1', 'Class 1', 0, 0, 200, 80);
      const vertex2 = graph.insertVertex(parent, '2', 'Class 2', 0, 0, 200, 80);
      const vertex3 = graph.insertVertex(parent, '3', 'Class 3', 0, 0, 200, 80);

      vertex1.valueChanged = (val) => {
        if(val === "int") {
          alert("Error")
        }
        else {
          vertex1.setValue(val);
        }
      }

      vertex2.valueChanged = (val) => {
        if(val === "int") {
          alert("Error")
        }
        else {
          vertex2.setValue(val);
        }
      }

      vertex3.valueChanged = (val) => {
        if(val === "int") {
          alert("Error")
        }
        else {
          vertex3.setValue(val);
        }
      }
            

      graph.insertEdge(parent, '', '', vertex1, vertex2);
      graph.insertEdge(parent, '', '', vertex1, vertex3);
    } finally {
      graph.getModel().endUpdate();
      new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
