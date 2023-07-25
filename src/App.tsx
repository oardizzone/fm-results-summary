const ReactionIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#F55"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
      />
    </svg>
  );
};

const MemoryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#FFB21E"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
      />
      <path
        stroke="#FFB21E"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
      />
      <path
        stroke="#FFB21E"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
      />
    </svg>
  );
};

const VerbalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#00BB8F"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
      />
    </svg>
  );
};

const VisualIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
      />
      <path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
      />
    </svg>
  );
};

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pale-blue">
      <div className="flex h-screen w-full flex-col rounded-b-3xl bg-white sm:h-max sm:w-auto sm:flex-row sm:rounded-3xl">
        <aside className="from flex w-full flex-col items-center rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue pb-8 pt-8 sm:min-h-full sm:w-72 sm:rounded-3xl">
          <p className="font-semibold text-light-lavender">Your Result</p>
          <div className="h-4"></div>
          <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-transparent">
            <p className="text-5xl font-bold text-white">76</p>
            <div className="h-2"></div>
            <p className="text-xs text-light-lavender opacity-50">of 100</p>
          </div>
          <div className="h-4"></div>
          <p className="text-2xl font-medium text-white">Great</p>
          <div className="h-4"></div>
          <p className="w-64 text-center text-xs text-light-lavender sm:w-44">
            You scored higher than 65% of the people who have taken these tests
          </p>
        </aside>
        <section className="w-full p-8 sm:w-72">
          <p className="font-semibold text-black">Summary</p>
          <div className="h-4"></div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between rounded-lg bg-light-red bg-opacity-5 p-3">
              <div className="flex items-center gap-2">
                <ReactionIcon />
                <p className="text-xs text-light-red">Reaction</p>
              </div>
              <p className="text-sm text-black">
                80 <span className="text-black text-opacity-50">/ 100</span>
              </p>
            </div>
            <div className="flex w-full items-center justify-between rounded-lg bg-orangey-yellow bg-opacity-5 p-3">
              <div className="flex items-center gap-2">
                <MemoryIcon />
                <p className="text-xs text-orangey-yellow">Reaction</p>
              </div>
              <p className="text-sm text-black">
                92 <span className="text-black text-opacity-50">/ 100</span>
              </p>
            </div>
            <div className="flex w-full items-center justify-between rounded-lg bg-green-teal bg-opacity-5 p-3">
              <div className="flex items-center gap-2">
                <VerbalIcon />
                <p className="text-xs text-green-teal">Verbal</p>
              </div>
              <p className="text-sm text-black">
                61 <span className="text-black text-opacity-50">/ 100</span>
              </p>
            </div>
            <div className="flex w-full items-center justify-between rounded-lg bg-cobalt-blue bg-opacity-5 p-3">
              <div className="flex items-center gap-2">
                <VisualIcon />
                <p className="text-xs text-cobalt-blue">Visual</p>
              </div>
              <p className="text-sm text-black">
                72 <span className="text-black text-opacity-50">/ 100</span>
              </p>
            </div>
          </div>
          <div className="h-6"></div>
          <button className="w-full rounded-full bg-dark-grey-blue  bg-gradient-to-b py-3 text-xs text-white  hover:from-light-slate-blue hover:to-light-royal-blue">
            Continue
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
