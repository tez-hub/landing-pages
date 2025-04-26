I have discovered that I have many public repositories. All my serious projects are private.

This is the first part of a series of projects (mostly landing pages, AI and ML projects and some full stack applications) that I will be pushing at least twice a week.


### Below is what I achieved in the first hour

https://github.com/user-attachments/assets/7f888ead-1689-4aed-be21-0602af356abc

### The second and third hours

This period involved a lot of debugging. After reload, it was loading from the footer.

I corrected that using this lines of code:

```bash
useEffect(() => {
  // Prevent scroll restoration on refresh
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // Scroll to top on initial load



  window.scrollTo(0, 0);
}, []);

```
https://github.com/user-attachments/assets/2021a61d-9a2a-4e48-8bae-2f0038f317f0

### The services section on Day 2
I have concluded the services section.



https://github.com/user-attachments/assets/4e92dc64-5eca-465f-90a5-7af75b4372c9

