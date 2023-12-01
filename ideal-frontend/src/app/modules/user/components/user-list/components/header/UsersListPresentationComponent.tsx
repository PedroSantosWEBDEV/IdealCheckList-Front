const UserListPresentationComponent = () => {
    return (
        <ul className="nav nav-pills me-md-6 mb-2 mb-sm-0">
            <li className="nav-item m-0">
                <a className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3 active" data-bs-toggle="tab" href="#kt_users_cards_pane">
                    <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        </g>
                    </svg>
                    </span>
                </a>
            </li>
            <li className="nav-item m-0">
                <a className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary" data-bs-toggle="tab" href="#kt_users_table_pane">
                    <span className="svg-icon svg-icon-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                        <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                    </svg>
                    </span>
                </a>
            </li>
        </ul>
    )
}

export {UserListPresentationComponent}