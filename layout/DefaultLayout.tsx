import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import Header from '../layout/Header';
import 'react-pro-sidebar/dist/css/styles.css';
import Link from 'next/link';
import { IoMdKeypad, IoMdListBox, IoMdPeople, IoMdArrowForward, IoMdList } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


function DefaultLayout({ children }) {
    const router = useRouter();
    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const handleToggleSidebar = (value) => {
        console.log(value);
        setToggled(value);
    };
    const handleShowSidebarChange = () => {
        console.log(showSidebar);
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        window.addEventListener("resize", handleIsMobileChange);

        const _isMobile = window.innerWidth < 768;
        setIsMobile(_isMobile);
        setShowSidebar(!_isMobile);

    }, []);

    function handleIsMobileChange() {
        console.log(window.innerWidth);
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const itemDashboard = [
        {
            is: "header",
            icon: <IoMdListBox />,
            title: 'List',
        },
        {
            is: "menu",
            menu: [
                {
                    is: "item",
                    icon: <IoMdKeypad />,
                    title: 'Home',
                    to: '/',
                },
                {
                    is: "item",
                    icon: <IoMdKeypad />,
                    title: 'Dashboard',
                    to: '/tablero',
                },
                {
                    is: "item",
                    icon: <IoMdList />,
                    title: 'Crud',
                    to: '/crud',
                },
                {
                    is: "item",
                    icon: <IoMdList />,
                    title: 'Tablas',
                    to: '/tablas',
                },
                {
                    is: "item",
                    icon: <IoMdPeople />,
                    title: 'User',
                    to: '/user',
                },
                {
                    is: "item",
                    icon: <IoMdArrowForward />,
                    title: 'Forward',
                    to: '/forward',
                }
            ],
        }
    ]

    const generateSidebar = () => {
        return itemDashboard.map((item, index) => {
            const element = item;
            if (element.is == "header") {
                return <SidebarHeader key={index} className="fw-bold fs-5 text-center pt-2 px-3">
                    {element.title}
                </SidebarHeader>

            } else if (element.is == "menu") {
                const menu = element.menu;
                return (
                    <Menu>
                        {
                            menu.map((item, index1) => {
                                const menu = item;
                                if (menu.is == "item") {
                                    return (<MenuItem key={index + '-' + index1} className={router.pathname == item.to ? "selected" : ""} icon={menu.icon}>
                                        <Link href={menu.to}>{menu.title}</Link>
                                    </MenuItem>)
                                }
                            })
                        }
                    </Menu>
                );
            }
        });
        // console.log(elements);
    }


    return (
        <div>
            <Header onClick={handleShowSidebarChange} ></Header>
            <div className={`app ${!showSidebar || isMobile ? 'wide-main-content' : ''}`}>
                {(isMobile && showSidebar) && <div className="background-sidebar z-10" onClick={handleShowSidebarChange}></div>}
                <div className={`sidebar-container z-10 d-lg-flex ${showSidebar ? '' : 'hide-sidebar'}`}>
                    <ProSidebar collapsed={collapsed} width={200} onToggle={handleToggleSidebar} toggled={toggled}
                    >

                        {generateSidebar()}
                    </ProSidebar>


                </div>
                <main className="w-100 container-fluid py-3 px-md-5 px-3">{children}</main>
            </div>
        </div>
    )
}

export default DefaultLayout;

