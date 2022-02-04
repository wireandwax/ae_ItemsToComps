//--- All Items to Comps
//-- This creates compositions from all items in Project Window



function itemsToComps()
{

    app.beginUndoGroup("ItemsToComps");

    var numberOfItems = app.project.numItems;
    var everyItem = [];

    //-- Add all items to array
    for(var n = 1; n<= numberOfItems; n++)
      {
      everyItem.push(app.project.item(n));

      }


    for (var i = 0; i <= (everyItem.length-1); i++)
      {
        var item = everyItem[i];

        //--Create comp
        var comp = app.project.items.addComp(item.name, item.width, item.height,
        item.pixelAspect, item.duration, item.frameRate);

        //--Add layer(s)
        var layers = comp.layers;
        var footageLayer = layers.add(item);
      }


     app.endUndoGroup();

}

itemsToComps();
