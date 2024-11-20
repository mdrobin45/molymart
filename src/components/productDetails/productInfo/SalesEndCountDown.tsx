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
         <div className="bg-red-50 text-red-500 border border-red-200 p-4 rounded-md flex items-center justify-between gap-2">
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
const SalesEndCountDown = ({ timeLeft }: { timeLeft: any }) => {
   const endDate = new Date();
   endDate.setDate(endDate.getDate() + Number(timeLeft?.days));
   endDate.setHours(endDate.getHours() + Number(timeLeft?.hours));
   endDate.setMinutes(endDate.getMinutes() + Number(timeLeft?.minutes));
   endDate.setSeconds(endDate.getSeconds() + Number(timeLeft?.seconds));
   return <Countdown date={endDate} renderer={renderer} />;
};

export default SalesEndCountDown;
