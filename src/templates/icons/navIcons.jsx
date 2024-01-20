function NavIcons(props) {
  const icon = props.icon;
  const className = props.className;

  if (icon === "home") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        className={className}
      >
        <path
          d="M22.58 6.34998L12.475 0.896978C12.178 0.736978 11.821 0.736978 11.525 0.896978L1.42499 6.34998C0.938988 6.61398 0.757988 7.21998 1.01999 7.70598C1.19999 8.04098 1.54499 8.23098 1.89999 8.23098C2.05999 8.23098 2.22399 8.19298 2.37499 8.11098L3.10899 7.71498L4.69899 18.965C4.91499 20.179 6.00899 21.027 7.35899 21.027H16.641C17.991 21.027 19.085 20.179 19.303 18.939L20.891 7.71398L21.628 8.11198C22.113 8.37498 22.72 8.19398 22.982 7.70798C23.245 7.22198 23.062 6.61498 22.578 6.35298L22.58 6.34998ZM12 14.435C10.205 14.435 8.74999 12.98 8.74999 11.185C8.74999 9.38998 10.205 7.93498 12 7.93498C13.795 7.93498 15.25 9.38998 15.25 11.185C15.25 12.98 13.795 14.435 12 14.435Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "explore") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={className}
      >
        <path
          d="M19 5.33698H15.07L15.442 1.06498C15.478 0.652982 15.172 0.289982 14.76 0.252982C14.343 0.222982 13.984 0.522982 13.948 0.935982L13.565 5.33598H7.245L7.615 1.06598C7.652 0.652982 7.345 0.289982 6.935 0.252982C6.515 0.222982 6.158 0.522982 6.122 0.935982L5.74 5.33598H1.782C1.368 5.33598 1.032 5.67298 1.032 6.08598C1.032 6.49898 1.368 6.83598 1.782 6.83598H5.61L5.06 13.163H1C0.586 13.163 0.25 13.499 0.25 13.913C0.25 14.327 0.586 14.663 1 14.663H4.93L4.558 18.935C4.522 19.347 4.828 19.71 5.24 19.747L5.306 19.75C5.691 19.75 6.018 19.455 6.052 19.064L6.435 14.664H12.755L12.385 18.934C12.349 19.347 12.655 19.71 13.067 19.747L13.133 19.75C13.518 19.75 13.845 19.455 13.879 19.064L14.261 14.664H18.218C18.631 14.664 18.968 14.327 18.968 13.914C18.968 13.501 18.631 13.164 18.218 13.164H14.39L14.94 6.83698H19C19.414 6.83698 19.75 6.50098 19.75 6.08698C19.75 5.67298 19.414 5.33698 19 5.33698ZM12.885 13.163H6.565L7.115 6.83698H13.435L12.885 13.163Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "notification") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        className={className}
      >
        <path
          d="M19.697 15.468C19.677 15.452 17.557 13.828 17.594 9.43799C17.614 6.90599 16.782 4.65599 15.247 3.10299C13.872 1.70999 12.01 0.939993 10.005 0.929993H9.99197C7.98798 0.939993 6.12597 1.70999 4.74997 3.10399C3.21597 4.65699 2.38197 6.90599 2.40397 9.43799C2.44097 13.768 0.383975 15.405 0.301975 15.468C0.0419748 15.661 -0.0640253 15.998 0.0369747 16.306C0.138975 16.614 0.426975 16.821 0.748975 16.821H5.66897C5.77098 19.131 7.66597 20.981 9.99897 20.981C12.332 20.981 14.225 19.131 14.326 16.821H19.248C19.57 16.821 19.858 16.615 19.958 16.307C20.061 16 19.955 15.662 19.695 15.469L19.697 15.468ZM9.99998 19.478C8.49498 19.478 7.26997 18.301 7.17197 16.82H12.828C12.728 18.3 11.505 19.48 9.99998 19.48V19.478ZM2.37997 15.32C3.11997 14.188 3.92797 12.292 3.90397 9.42399C3.88597 7.26399 4.54797 5.44199 5.81697 4.15699C6.90997 3.04999 8.39698 2.43699 9.99998 2.42999C11.603 2.43799 13.087 3.04999 14.18 4.15799C15.45 5.44299 16.113 7.26399 16.095 9.42499C16.071 12.293 16.88 14.19 17.62 15.321H2.37997V15.32Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "message") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        className={className}
      >
        <path
          d="M17.25 0.0180054H2.75C1.233 0.0180054 0 1.25201 0 2.77001V15.265C0 16.783 1.233 18.018 2.75 18.018H17.25C18.767 18.018 20 16.783 20 15.265V2.77001C20 1.25201 18.767 0.0180054 17.25 0.0180054ZM2.75 1.51801H17.25C17.94 1.51801 18.5 2.07801 18.5 2.76801V3.48201L10.45 8.84901C10.177 9.02901 9.824 9.03101 9.55 8.84701L1.5 3.48201V2.76801C1.5 2.07801 2.06 1.51801 2.75 1.51801ZM17.25 16.516H2.75C2.06 16.516 1.5 15.956 1.5 15.266V5.24001L8.74 10.07C9.123 10.326 9.562 10.454 10 10.454C10.44 10.454 10.877 10.326 11.26 10.071L18.5 5.24101V15.263C18.5 15.953 17.94 16.513 17.25 16.513V16.516Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "bookmark") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        className={className}
      >
        <path
          d="M16.9 20.5C16.743 20.5 16.588 20.45 16.458 20.356L9.00001 14.928L1.54201 20.358C1.31401 20.522 1.01201 20.548 0.760006 20.418C0.510006 20.291 0.350006 20.033 0.350006 19.751V2.60001C0.350006 1.36001 1.36001 0.350006 2.60001 0.350006H15.398C16.638 0.350006 17.648 1.36001 17.648 2.60001V19.75C17.648 20.032 17.49 20.29 17.238 20.418C17.132 20.473 17.015 20.5 16.898 20.5H16.9ZM9.00001 13.25C9.15501 13.25 9.31001 13.298 9.44001 13.394L16.15 18.277V2.60001C16.15 2.18801 15.813 1.85001 15.4 1.85001H2.60001C2.18701 1.85001 1.85001 2.18801 1.85001 2.60001V18.277L8.56001 13.394C8.69001 13.298 8.84501 13.25 9.00001 13.25Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "list") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={className}
      >
        <path
          d="M17.75 20H2.25C1.01 20 0 18.99 0 17.75V2.25C0 1.01 1.01 0 2.25 0H17.75C18.99 0 20 1.01 20 2.25V17.75C20 18.99 18.99 20 17.75 20ZM2.25 1.5C1.836 1.5 1.5 1.837 1.5 2.25V17.75C1.5 18.163 1.836 18.5 2.25 18.5H17.75C18.164 18.5 18.5 18.163 18.5 17.75V2.25C18.5 1.837 18.164 1.5 17.75 1.5H2.25Z"
          fill="#D9D9D9"
        />
        <path
          d="M15 6.64002H5C4.586 6.64002 4.25 6.30301 4.25 5.89001C4.25 5.47701 4.586 5.14001 5 5.14001H15C15.414 5.14001 15.75 5.47501 15.75 5.89001C15.75 6.30501 15.414 6.64002 15 6.64002ZM15 10.75H5C4.586 10.75 4.25 10.414 4.25 10C4.25 9.58601 4.586 9.25001 5 9.25001H15C15.414 9.25001 15.75 9.58601 15.75 10C15.75 10.414 15.414 10.75 15 10.75ZM10 14.86H5C4.586 14.86 4.25 14.525 4.25 14.11C4.25 13.695 4.586 13.36 5 13.36H10C10.414 13.36 10.75 13.697 10.75 14.11C10.75 14.523 10.414 14.86 10 14.86Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "profil") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        className={className}
      >
        <path
          d="M9 10.816C10.355 10.816 11.872 10.666 12.84 9.56001C13.654 8.63001 13.918 7.19201 13.646 5.16801C13.266 2.34301 11.529 0.656006 9 0.656006C6.471 0.656006 4.734 2.34301 4.354 5.17001C4.082 7.19201 4.346 8.63001 5.16 9.56001C6.128 10.667 7.645 10.816 9 10.816ZM5.84 5.36801C6.002 4.16801 6.627 2.15601 9 2.15601C11.373 2.15601 11.998 4.16901 12.16 5.36801C12.367 6.91801 12.217 7.99501 11.71 8.57301C11.255 9.09301 10.444 9.31601 9 9.31601C7.556 9.31601 6.745 9.09301 6.29 8.57301C5.783 7.99501 5.633 6.91701 5.84 5.36801ZM17.28 18.236C16.403 14.71 12.998 12.246 9 12.246C5.002 12.246 1.597 14.71 0.719997 18.236C0.547997 18.928 0.691997 19.636 1.115 20.176C1.523 20.696 2.155 20.996 2.848 20.996H15.152C15.845 20.996 16.477 20.696 16.885 20.176C17.309 19.636 17.452 18.929 17.279 18.236H17.28ZM15.704 19.252C15.578 19.412 15.388 19.498 15.152 19.498H2.848C2.613 19.498 2.422 19.413 2.296 19.252C2.159 19.078 2.116 18.84 2.176 18.598C2.886 15.743 5.693 13.748 9 13.748C12.307 13.748 15.114 15.742 15.824 18.598C15.884 18.84 15.841 19.078 15.704 19.252Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "more") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        className={className}
      >
        <path
          d="M16 12.5C16.8284 12.5 17.5 11.8284 17.5 11C17.5 10.1716 16.8284 9.5 16 9.5C15.1716 9.5 14.5 10.1716 14.5 11C14.5 11.8284 15.1716 12.5 16 12.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M11 12.5C11.8284 12.5 12.5 11.8284 12.5 11C12.5 10.1716 11.8284 9.5 11 9.5C10.1716 9.5 9.5 10.1716 9.5 11C9.5 11.8284 10.1716 12.5 11 12.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M6 12.5C6.82843 12.5 7.5 11.8284 7.5 11C7.5 10.1716 6.82843 9.5 6 9.5C5.17157 9.5 4.5 10.1716 4.5 11C4.5 11.8284 5.17157 12.5 6 12.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M11 21.75C5.072 21.75 0.25 16.928 0.25 11C0.25 5.072 5.072 0.25 11 0.25C16.928 0.25 21.75 5.072 21.75 11C21.75 16.928 16.928 21.75 11 21.75ZM11 1.75C5.9 1.75 1.75 5.9 1.75 11C1.75 16.1 5.9 20.25 11 20.25C16.1 20.25 20.25 16.1 20.25 11C20.25 5.9 16.1 1.75 11 1.75Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  } else if (icon === "setting") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className={className}
      >
        <path
          d="M9.00013 5.84167C7.25846 5.84167 5.8418 7.25834 5.8418 9.00001C5.8418 10.7417 7.25846 12.1583 9.00013 12.1583C10.7418 12.1583 12.1585 10.7417 12.1585 9.00001C12.1585 7.25834 10.7418 5.84167 9.00013 5.84167ZM9.00013 10.9083C7.94846 10.9083 7.0918 10.0533 7.0918 9.00001C7.0918 7.94668 7.95013 7.09167 9.00013 7.09167C10.0501 7.09167 10.9085 7.94668 10.9085 9.00001C10.9085 10.0533 10.0518 10.9083 9.00013 10.9083Z"
          fill="#EFF3F4"
        />
        <path
          d="M9.30004 17.6459H8.69837C7.71254 17.6459 6.90337 16.9059 6.81337 15.9259L6.80171 15.8034C6.78087 15.5642 6.62921 15.3592 6.40837 15.2667C6.17004 15.1667 5.92337 15.2125 5.74337 15.3625L5.64671 15.4434C4.92337 16.0475 3.76921 15.9959 3.09671 15.3267L2.67171 14.9017C1.97504 14.2017 1.92504 13.1067 2.55504 12.3517L2.63671 12.2534C2.79171 12.0684 2.82837 11.8175 2.73837 11.5975C2.64671 11.3709 2.44004 11.2192 2.20004 11.1975L2.07504 11.1859C1.09171 11.0967 0.352539 10.2859 0.352539 9.30085V8.69919C0.352539 7.71335 1.09254 6.90419 2.07254 6.81419L2.20254 6.80252C2.44004 6.78169 2.64421 6.63002 2.73754 6.40835C2.82921 6.18335 2.79171 5.93085 2.63754 5.74585L2.55921 5.64919C1.92837 4.89252 1.97754 3.79669 2.67337 3.09919L3.10004 2.67252C3.77004 2.00252 4.92337 1.95169 5.65004 2.55585L5.74671 2.63752C5.92837 2.79085 6.18671 2.82919 6.40504 2.73919C6.63004 2.64585 6.78171 2.44085 6.80254 2.20335L6.81421 2.07585C6.90337 1.09252 7.71421 0.354187 8.69921 0.354187H9.30087C10.2867 0.354187 11.0959 1.09419 11.1859 2.07419L11.1975 2.20419C11.2184 2.44169 11.3692 2.64585 11.5909 2.73752C11.8217 2.83502 12.0742 2.78919 12.2525 2.64002L12.3525 2.55502C13.075 1.95252 14.2309 2.00335 14.9025 2.67169L15.3275 3.09835C16.0242 3.79669 16.0742 4.89252 15.4442 5.64835L15.3609 5.74669C15.2042 5.93002 15.1659 6.18169 15.2584 6.40335C15.3517 6.62835 15.5584 6.77835 15.7967 6.80169L15.9234 6.81335C16.9067 6.90252 17.6459 7.71335 17.6459 8.69835V9.30085C17.6459 10.2867 16.9059 11.0959 15.9259 11.1859L15.7967 11.1975C15.56 11.2175 15.355 11.3684 15.2634 11.5892C15.1692 11.8159 15.2075 12.0675 15.3609 12.2517L15.4442 12.3517C16.0742 13.1059 16.0242 14.2017 15.3275 14.9017L14.9025 15.3267C14.23 15.9967 13.0775 16.0467 12.3525 15.4434L12.2567 15.3634C12.0759 15.2109 11.815 15.1717 11.5984 15.2617C11.3709 15.3567 11.2192 15.5617 11.1984 15.8L11.1867 15.925C11.0975 16.9025 10.2867 17.6417 9.30171 17.6417L9.30004 17.6459ZM6.15587 13.9625C6.40587 13.9625 6.65004 14.0125 6.88087 14.1084C7.53921 14.3817 7.98421 14.9867 8.04754 15.6884L8.05921 15.8109C8.09004 16.1442 8.36504 16.3942 8.70087 16.3942H9.30254C9.63587 16.3942 9.91087 16.1442 9.94254 15.8109L9.95421 15.6875C10.0175 14.9859 10.4625 14.3817 11.1142 14.1109C11.775 13.8359 12.5275 13.9592 13.0584 14.4025L13.1525 14.4809C13.3009 14.6042 13.4575 14.6309 13.5634 14.6309C13.735 14.6309 13.8967 14.5642 14.0184 14.4417L14.4434 14.0167C14.68 13.78 14.6975 13.4084 14.4834 13.1517L14.4 13.0517C13.9484 12.51 13.8359 11.7684 14.1067 11.1159C14.3784 10.4575 14.9834 10.0159 15.685 9.95169L15.8142 9.94002C16.145 9.90919 16.3975 9.63419 16.3975 9.29835V8.69669C16.3975 8.36335 16.145 8.08835 15.8125 8.05669L15.6859 8.04502C14.9809 7.98002 14.3775 7.53669 14.1067 6.88419C13.835 6.22752 13.9484 5.48585 14.4009 4.94502L14.4842 4.84669C14.6984 4.58835 14.6809 4.21669 14.4442 3.98002L14.0192 3.55502C13.8975 3.43252 13.7359 3.36585 13.5642 3.36585C13.4584 3.36585 13.3017 3.39252 13.1542 3.51585L13.0542 3.59919C12.5259 4.03919 11.7625 4.15752 11.1192 3.89419C10.4625 3.62169 10.0192 3.01752 9.95504 2.31419L9.94337 2.18502C9.91421 1.85419 9.63921 1.60169 9.30421 1.60169H8.70171C8.36837 1.60169 8.09337 1.85419 8.06171 2.18669L8.05004 2.31335C7.98671 3.01585 7.54337 3.62002 6.89171 3.89085C6.23587 4.16252 5.48087 4.04335 4.95004 3.59919L4.85171 3.51919C4.70171 3.39419 4.54504 3.36919 4.43921 3.36919C4.26754 3.36919 4.10587 3.43585 3.98421 3.55752L3.55754 3.98252C3.32254 4.21919 3.30504 4.59085 3.51921 4.84752L3.60254 4.94585C4.05254 5.49002 4.16671 6.23252 3.89587 6.88335C3.62337 7.54002 3.01921 7.98335 2.31671 8.04752L2.18671 8.05919C1.85587 8.09002 1.60337 8.36502 1.60337 8.70085V9.30252C1.60337 9.63585 1.85587 9.91085 2.18837 9.94252L2.31337 9.95419C3.02004 10.0192 3.62421 10.4642 3.89421 11.1175C4.16504 11.7725 4.05254 12.5134 3.60004 13.055L3.52004 13.1509C3.30337 13.4092 3.32171 13.7809 3.55837 14.0175L3.98337 14.4425C4.10504 14.565 4.26671 14.6317 4.43837 14.6317C4.54421 14.6317 4.70087 14.6067 4.84837 14.4817L4.94504 14.4017C5.28337 14.1217 5.71421 13.965 6.15587 13.965V13.9625Z"
          fill="#EFF3F4"
        />
      </svg>
    );
  } else if (icon === "setting") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className={className}
      >
        <path d="M9.00013 5.84167C7.25846 5.84167 5.8418 7.25834 5.8418 9.00001C5.8418 10.7417 7.25846 12.1583 9.00013 12.1583C10.7418 12.1583 12.1585 10.7417 12.1585 9.00001C12.1585 7.25834 10.7418 5.84167 9.00013 5.84167ZM9.00013 10.9083C7.94846 10.9083 7.0918 10.0533 7.0918 9.00001C7.0918 7.94668 7.95013 7.09167 9.00013 7.09167C10.0501 7.09167 10.9085 7.94668 10.9085 9.00001C10.9085 10.0533 10.0518 10.9083 9.00013 10.9083Z" />
        <path d="M9.30004 17.6459H8.69837C7.71254 17.6459 6.90337 16.9059 6.81337 15.9259L6.80171 15.8034C6.78087 15.5642 6.62921 15.3592 6.40837 15.2667C6.17004 15.1667 5.92337 15.2125 5.74337 15.3625L5.64671 15.4434C4.92337 16.0475 3.76921 15.9959 3.09671 15.3267L2.67171 14.9017C1.97504 14.2017 1.92504 13.1067 2.55504 12.3517L2.63671 12.2534C2.79171 12.0684 2.82837 11.8175 2.73837 11.5975C2.64671 11.3709 2.44004 11.2192 2.20004 11.1975L2.07504 11.1859C1.09171 11.0967 0.352539 10.2859 0.352539 9.30085V8.69919C0.352539 7.71335 1.09254 6.90419 2.07254 6.81419L2.20254 6.80252C2.44004 6.78169 2.64421 6.63002 2.73754 6.40835C2.82921 6.18335 2.79171 5.93085 2.63754 5.74585L2.55921 5.64919C1.92837 4.89252 1.97754 3.79669 2.67337 3.09919L3.10004 2.67252C3.77004 2.00252 4.92337 1.95169 5.65004 2.55585L5.74671 2.63752C5.92837 2.79085 6.18671 2.82919 6.40504 2.73919C6.63004 2.64585 6.78171 2.44085 6.80254 2.20335L6.81421 2.07585C6.90337 1.09252 7.71421 0.354187 8.69921 0.354187H9.30087C10.2867 0.354187 11.0959 1.09419 11.1859 2.07419L11.1975 2.20419C11.2184 2.44169 11.3692 2.64585 11.5909 2.73752C11.8217 2.83502 12.0742 2.78919 12.2525 2.64002L12.3525 2.55502C13.075 1.95252 14.2309 2.00335 14.9025 2.67169L15.3275 3.09835C16.0242 3.79669 16.0742 4.89252 15.4442 5.64835L15.3609 5.74669C15.2042 5.93002 15.1659 6.18169 15.2584 6.40335C15.3517 6.62835 15.5584 6.77835 15.7967 6.80169L15.9234 6.81335C16.9067 6.90252 17.6459 7.71335 17.6459 8.69835V9.30085C17.6459 10.2867 16.9059 11.0959 15.9259 11.1859L15.7967 11.1975C15.56 11.2175 15.355 11.3684 15.2634 11.5892C15.1692 11.8159 15.2075 12.0675 15.3609 12.2517L15.4442 12.3517C16.0742 13.1059 16.0242 14.2017 15.3275 14.9017L14.9025 15.3267C14.23 15.9967 13.0775 16.0467 12.3525 15.4434L12.2567 15.3634C12.0759 15.2109 11.815 15.1717 11.5984 15.2617C11.3709 15.3567 11.2192 15.5617 11.1984 15.8L11.1867 15.925C11.0975 16.9025 10.2867 17.6417 9.30171 17.6417L9.30004 17.6459ZM6.15587 13.9625C6.40587 13.9625 6.65004 14.0125 6.88087 14.1084C7.53921 14.3817 7.98421 14.9867 8.04754 15.6884L8.05921 15.8109C8.09004 16.1442 8.36504 16.3942 8.70087 16.3942H9.30254C9.63587 16.3942 9.91087 16.1442 9.94254 15.8109L9.95421 15.6875C10.0175 14.9859 10.4625 14.3817 11.1142 14.1109C11.775 13.8359 12.5275 13.9592 13.0584 14.4025L13.1525 14.4809C13.3009 14.6042 13.4575 14.6309 13.5634 14.6309C13.735 14.6309 13.8967 14.5642 14.0184 14.4417L14.4434 14.0167C14.68 13.78 14.6975 13.4084 14.4834 13.1517L14.4 13.0517C13.9484 12.51 13.8359 11.7684 14.1067 11.1159C14.3784 10.4575 14.9834 10.0159 15.685 9.95169L15.8142 9.94002C16.145 9.90919 16.3975 9.63419 16.3975 9.29835V8.69669C16.3975 8.36335 16.145 8.08835 15.8125 8.05669L15.6859 8.04502C14.9809 7.98002 14.3775 7.53669 14.1067 6.88419C13.835 6.22752 13.9484 5.48585 14.4009 4.94502L14.4842 4.84669C14.6984 4.58835 14.6809 4.21669 14.4442 3.98002L14.0192 3.55502C13.8975 3.43252 13.7359 3.36585 13.5642 3.36585C13.4584 3.36585 13.3017 3.39252 13.1542 3.51585L13.0542 3.59919C12.5259 4.03919 11.7625 4.15752 11.1192 3.89419C10.4625 3.62169 10.0192 3.01752 9.95504 2.31419L9.94337 2.18502C9.91421 1.85419 9.63921 1.60169 9.30421 1.60169H8.70171C8.36837 1.60169 8.09337 1.85419 8.06171 2.18669L8.05004 2.31335C7.98671 3.01585 7.54337 3.62002 6.89171 3.89085C6.23587 4.16252 5.48087 4.04335 4.95004 3.59919L4.85171 3.51919C4.70171 3.39419 4.54504 3.36919 4.43921 3.36919C4.26754 3.36919 4.10587 3.43585 3.98421 3.55752L3.55754 3.98252C3.32254 4.21919 3.30504 4.59085 3.51921 4.84752L3.60254 4.94585C4.05254 5.49002 4.16671 6.23252 3.89587 6.88335C3.62337 7.54002 3.01921 7.98335 2.31671 8.04752L2.18671 8.05919C1.85587 8.09002 1.60337 8.36502 1.60337 8.70085V9.30252C1.60337 9.63585 1.85587 9.91085 2.18837 9.94252L2.31337 9.95419C3.02004 10.0192 3.62421 10.4642 3.89421 11.1175C4.16504 11.7725 4.05254 12.5134 3.60004 13.055L3.52004 13.1509C3.30337 13.4092 3.32171 13.7809 3.55837 14.0175L3.98337 14.4425C4.10504 14.565 4.26671 14.6317 4.43837 14.6317C4.54421 14.6317 4.70087 14.6067 4.84837 14.4817L4.94504 14.4017C5.28337 14.1217 5.71421 13.965 6.15587 13.965V13.9625Z" />
      </svg>
    );
  } else {
    return false;
  }
}

export default NavIcons;
