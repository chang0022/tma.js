import type { JSX } from 'solid-js';

export function Cellular(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="30" height="30" rx="7" fill="#34C759"/>
      <path
        d="M19.103 18.8169C19.3687 19.124 19.8335 19.124 20.1489 18.7754C21.5269 17.2812 22.3071 15.2891 22.3071 13.1392C22.3071 10.9893 21.5269 8.99707 20.1489 7.50293C19.8335 7.1543 19.3687 7.1543 19.103 7.46143C18.8374 7.76025 18.9204 8.15039 19.2192 8.49072C20.3315 9.72754 20.9541 11.3545 20.9541 13.1392C20.9541 14.9238 20.3315 16.5508 19.2192 17.7876C18.9204 18.1279 18.8374 18.5181 19.103 18.8169ZM4.68457 13.1392C4.68457 15.2891 5.46484 17.2812 6.84277 18.7754C7.1582 19.124 7.62305 19.124 7.88867 18.8169C8.1543 18.5181 8.07129 18.1279 7.77246 17.7876C6.66016 16.5508 6.0376 14.9238 6.0376 13.1392C6.0376 11.3545 6.66016 9.72754 7.77246 8.49072C8.07129 8.15039 8.1543 7.76025 7.88867 7.46143C7.62305 7.1543 7.1582 7.1543 6.84277 7.50293C5.46484 8.99707 4.68457 10.9893 4.68457 13.1392ZM8.1792 13.1392C8.1792 14.3594 8.59424 15.4966 9.31641 16.3931C9.60693 16.7749 10.105 16.7666 10.3789 16.4512C10.6445 16.1523 10.5366 15.7788 10.271 15.4219C9.77295 14.8076 9.53223 14.0024 9.53223 13.1392C9.53223 12.2759 9.79785 11.4956 10.271 10.8564C10.5283 10.4912 10.6445 10.126 10.3789 9.82715C10.105 9.51172 9.60693 9.50342 9.31641 9.88525C8.59424 10.7817 8.1792 11.9189 8.1792 13.1392ZM16.6128 16.4512C16.8867 16.7666 17.3848 16.7749 17.6753 16.3931C18.3975 15.4966 18.8125 14.3594 18.8125 13.1392C18.8125 11.9189 18.3975 10.7817 17.6753 9.88525C17.3848 9.50342 16.8867 9.51172 16.6128 9.82715C16.3472 10.126 16.4634 10.4912 16.7207 10.8564C17.1938 11.4956 17.4595 12.2759 17.4595 13.1392C17.4595 14.0024 17.2188 14.8076 16.7207 15.4219C16.4551 15.7788 16.3472 16.1523 16.6128 16.4512ZM12.0059 13.1392C12.0059 13.7368 12.3462 14.2515 12.8608 14.4839V21.9463C12.8608 22.3696 13.1182 22.6602 13.5 22.6602C13.8901 22.6602 14.1309 22.3779 14.1309 21.9463V14.4839C14.6372 14.2515 14.9858 13.7285 14.9858 13.1392C14.9858 12.3091 14.3301 11.6367 13.5 11.6367C12.6616 11.6367 12.0059 12.3091 12.0059 13.1392Z"
        fill="white"
      />
    </svg>
  );
}