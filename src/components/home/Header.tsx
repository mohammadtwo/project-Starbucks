export function Header() {
  return (
    <div>
      <div className="flex p-3 flex-col justify-center w-full items-center">
        <div>
          <img
            src="Assets/logo.png"
            alt="logo"
            className="w-18.75 h-18.75 "
          />
        </div>
        <div className="text-5xl font-bold">starbucks</div>
      </div>
      <div className="grid place-items-center text-xl font-medium [word-spacing:8px]">
        starbucks online coffee orders
      </div>
    </div>
  );
}

