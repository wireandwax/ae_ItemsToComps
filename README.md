 * All Items to Comps
 * -------------------
 * Description:
 * This After Effects script automatically creates a new composition 
 * for each item in the Project panel. Each composition is named after 
 * its source item and inherits its width, height, pixel aspect ratio, 
 * duration, and frame rate.
 *
 * How it works:
 * - Loops through all items in the project.
 * - Creates a new composition for each item.
 * - Adds the item as a layer in its corresponding composition.
 *
 * Notes:
 * - Wrapped in an undo group for easy undo in After Effects.
 * - Best used on clean project selections to avoid unwanted duplicates.
 

