<!-- What did you do well, process wise
What would you do differently next time to improve, process wise -->

->creating static routes, setting up navbar(well)
->creating buttons, forms(well)
->handling the form data with useState hooks was a bit difficult

->had trouble with setting up min and max values for slider
->in form component, I fetched the listing data again from API, which is coontradictory to DRY, next time I'll make data fetching more reusable.
->for the express server part, had confusion regarding hardcoding/fetching data from API(finally fetched data from API), could not make the fetched data look pretty.
->for sliders, couldn't pass the value of min floor and max budget to the propertylist.js from sliderfilter.js, so mover the code of sliderfilter.js to propertylist.js . while using useState hook for filtering data, it seemed that it was taking time to update min floor and max budget, so show filter was using old value and giving wrong data. to solve that, I passed "event.target.value" instead of min floor when floor slider is changing, and did the same for max budget slider.

//\* used a bit of advanced code for schedule viewing form from here: https://www.youtube.com/watch?v=0f-eBwLmXGo
//\* for now created some styling, AgentCard.css might need some changing after sorting the agents via languages(could not manage to do that)
//\* for idea about how to read the value of slider: https://stackoverflow.com/questions/36122034/jsx-react-html5-input-slider-doesnt-work
//|\* for getting the max and min price and floor space from the data fetched from api, used help from here : https://stackoverflow.com/questions/11142884/fast-way-to-get-the-min-max-values-among-properties-of-object

->I need to learn dynamic routing carefully, could not manage to start with dynamic routing for this project
