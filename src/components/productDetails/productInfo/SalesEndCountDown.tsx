import Countdown from "react-countdown";

const renderer = ({
   days,
   hours,
   minutes,
   seconds,
   completed,
}: {
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
   completed: boolean;
}) => {
   if (completed) {
      return;
   } else {
      return (
         <div className="bg-red-50 text-red-500 p-4 rounded-md flex items-center justify-between gap-2">
            <p className="font-medium">Hurry up! Sale ends in..</p>
            <div className="flex items-center gap-1">
               <span className="font-semibold">{days}d</span>
               <span>:</span>
               <span className="font-semibold">{hours}h</span>
               <span>:</span>
               <span className="font-semibold">{minutes}m</span>
               <span>:</span>
               <span className="font-semibold">{seconds}s</span>
            </div>
         </div>
      );
   }
};
const SalesEndCountDown = () => {
   const endDate = new Date();
   endDate.setDate(endDate.getDate() + 7);
   endDate.setHours(endDate.getHours() + 12);
   endDate.setMinutes(endDate.getMinutes() + 45);
   endDate.setSeconds(endDate.getSeconds() + 19);
   return <Countdown date={endDate} renderer={renderer} />;
};

export default SalesEndCountDown;
