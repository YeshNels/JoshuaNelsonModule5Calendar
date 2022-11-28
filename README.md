JoshuaNelsonModule5Calendar

This exercise is about editing a calendar application to use local storage to store data in discrete chunks that will load in when the page loads.

Dividing the application into chunks for each hour of the workday was needed to keep each piece separate, but the base code for each hour block is the same. However, in order to keep the information for each hour separate, the best solution I could come up with was to run 8 different iterations of the same code for each hour with variable names changing. The only clever part of the script is using the Moments.js library to check the hour and to selectively render the blocks in different colors according to the time. There is also code that should handle making the color swap when the time shifts from one hour to the next by adding and removing the proper classes for the CSS to take effect.
This application has been deployed at https://yeshnels.github.io/JoshuaNelsonModule5Calendar/ for your viewing.