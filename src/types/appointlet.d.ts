declare module '@appointlet/appointlet.js' {
    declare class Appointlet {
      constructor(link: string);
      inlineEmbed: (el: Element) => Promise<SchedulerAttendeeNode | null>;
      openModal: () => Promise<SchedulerAttendeeNode | null>;
    }
    
    export default Appointlet;
  }
  
  // If SchedulerAttendeeNode is not defined elsewhere, you might need to declare it as well
  interface SchedulerAttendeeNode {
    // Add properties if you know them, or leave as empty interface
  }