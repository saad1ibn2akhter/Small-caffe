import './Navbar.css'
import './Header.css'
const Navbar = () => {
    return (
        <section className="flex justify-between items-center container2 mx-auto font bg-gray-50 p-2 rounded-2xl lg:p-6" >
            <div>
                <h1 className='font-bold text-[22px] lg:text-[28px]'><span className='text-violet-600'>T</span>asteBud <span className='text-red-300'>H</span>aven</h1>
            </div>
            <div className="hidden lg:block flex space-x-4 items-center bg-white rounded-xl">
                <button className='p-3 rounded-lg text-red-200 font-medium'><a href=""><h1>Home</h1></a></button>
                <button className='p-3 rounded-lg '><a href=""><h1>Recipe</h1></a></button>
                <button className='p-3 rounded-lg '><a href=""><h1>About</h1></a></button>
                <button className='p-3 rounded-lg'><a href=""><h1>Search</h1></a></button>

            </div>
            <div className="flex items-center space-x-4">
                {/* search bar */}
                <div className=" hidden lg:block bg-white rounded-3xl">
                    <div className="flex space-x-2 bg-white rounded-3xl">
                        <img className="rounded-full w-[36px] h-[36px] sm:h-[56px] sm:w-[56px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACUCAMAAACnfDWKAAAAY1BMVEX///8AAAD19fX5+fnq6uqlpaXJycnm5ubDw8NkZGQ1NTV4eHjg4ODAwMDy8vLPz8+QkJCAgICvr688PDxPT08dHR0iIiJpaWmcnJxKSkrZ2dlfX18oKCiWlpYSEhKKiopXV1dR190ZAAAC/klEQVR4nO3a23aqMBAGYCMQUAQkHjgp+P5P2UzAXd1VSddqwMT/u+uSi0wnmUwIiwUAAAAAAAAAAAAAAAAAAAAAAAAAAIB9vLkHMAmPn3dMOcXCn3s0JoXJit1ZB5vl3IMyIxQ79kObcwen9FJchmwWXSCd4/0wnbvN3GP7a358oMgOXVT7auZ66SYTfbz7ZO7R/a2wn8GBfz9n00yFeyxnGpYRtQo1fvRTov4NnTsLN6N4dtHjH/2cft26Em29ltGsnpehUs3wCQdkkE+b6yp88URAe9CTxNvFo8RVr5slivY00XiMqmnPeZVXaUnrNp9mPCYtCxmHGHtqIzuONptiPEZRJS7GHxMHrcfe3EovZTQBdranNqXFqHOyodSejQ/HLCGD1Wp9PbkZF5YfcGUzuNc71XT2z+Oj7AT1nqx1qvZbyw76jaAM1u7TT9Kyk+5plc5FqdHRGFb+YiHKvmJldYWSbWBVaz4rK1Qz0la+t1y7GC8WW8YunxSs3Znd/mLNFravWdGyte6p/GR7NeYta3U7Bbn1nK1+E5Uetdv70PoOanHQbu8Dxo6Wv4cqtV+lySNDY/lFCE3OUmclclmfOuPDMUwmbK2TMLkja3fRbythWoc8Ls/ujdW1mKSVjHa0PU5jpr9HvbFE5wU4vb2pphiNYWk+/jKV022P1a3iVV2N3UnS+wxXbrYS2Ua12+dtb3akO3knErvoV2QbPzm+eeKkrqrtr8UDoW6jH1ZbP2+HD2cKV74SUtE+upAuVVobld2V1Qe8G+r2nbF95C+v09VLN9v+W6iubypY48q6DfPTMFvLiGcZ5yLv428vqkuM6K/C6tcyN7zo3+q8dQmGdHLaf2y/7fm2jLr1f6EW4nsZRxRt48q6leGG/FxdAz0Uor4LTeW2caUmK56X1hnPQu/nvkpnWpdy+1pfk12pUmPcqslj+PHjor18zLqlaJu5RzEVVZMt/7pCH6/ayqnd9qWN+JQKBQAAAAAAAAAAAAAAAAAAAAAAAADgki+R+RqFxnKHfwAAAABJRU5ErkJggg==" alt="" />
                        <input className="rounded-3xl border-none" type="text" name="" id="" />
                    </div>
                </div>
                {/* icon */}
                <div className="rounded-full w-[48px] h-[48px] sm:h-[56px] sm:w-[56px]">
                    <img className='rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAA6lBMVEUTrsD///8tWXImWmjktpLxyaXrwJwAqr3vxqIArcEAqLwSssQnVWPnuJPxto37/v78y6MtUmxbtLpgsLYdV2er3eRZvsy14efy+vvn9fcff47tu5T2yqRsxdIjZ3UicH4AUWTQ6++GzdhBucif1+Acjp4ZmaqT0doATGLStpmckIDF6O06boQnfpLc8fQKoLKEiYE6Y21ObHDFrpWwm4bWr45xfnqKhnurno3BooiGo55jd3feyKh7fnhIjZVztrmbsKXGw6uBsaxPZ3KpsqNDrLilvrG2sp2Vu7NeiZAATW1HZnpEjp9eiJnU7W8dAAAKFUlEQVR4nM3daVvbuBYAYGUxji2MCQ2JE2ffICELIU1bLmSYLpl2gPn/f+fKW+JF8nJkJ5wvM09J8Ys4ko5sWUW5uKFdo2ziWottQHE/WKvKGWnlai1lrdZHYkZYRL5zP2bzxtPeIVHKDIuQJKK71LTaTXbt6oR4E6d5Y2h71eyxhFvtpaGtoSyT4BASiu5sUVrtJquhIBhyZDZEaOutY2SBE2KrzqPV8DGxhIvDWzdUe3eklD2EFD6UhWlrGc4IrBBD+1qItnZ0qhUhXLb2+vgNa4V4nVybVcUVJ5hclvZYcwI9WMnA0N6dKg2sEBkjA13bO6nViF587WJwyjQwQhosYmvxqbGEi2Nq1dbxChl2yC01jlYdnhpqxzDIDWpP38Oc6EVr6/Lpk9YKSQ7Uj36tetSCNjzEQOr6taeccIPhn4J92o+TtFb0wrTaUZa38UOsaiHa4UcYad0hD9na+sdqWSPEOkurtk5to4RnXHBrj79ojA7vstKl/WhdzApPR3NpP1wXs8Ld0Q5a9dQsZqgUbUprXOyOVL6jaw281y4G3N+W4JbLUaPTbhcKhXa70xgtZfNPOeOwjthree8oYyyPG53COYmCFeb/dhpjmbeNxRu/ts65FMPLRruwhx7CBC/5vNKg7tPW+Jp23Ak43dEZcSWEWPNq1QFci+VRm9Kq3hZujzgSQhyoHu0deKzFKNJqgdscCSHfebRVmJR0LSNdo62mlySEhGBDW9WtXSSXisvlctyI1ayejOg0Go3OODF34dImX5Tj8XnhPBnVAZMYJdYOD1oteSIYWng0kqeCttdCSkWZQ3ueWGsXjoZWhcxjx9WS+Uy1tRpkHhPhWEgmSAPN1i5Ag22bo3GT9zIkL2wtqAzHDbgWMCYgcWhrQbUiHnG07RIwqQ0srQYqEfASji1ALihqphZYfokdcOO2IfWCUYgRbR9Y2YITFzCAkZD6hlZtwbR45Fy9Est4+BSkkxFtSyVa8IJsn7j3q2hvpfD1Ya+FladkeYbgd2iwvV6oTNarbgS2+/BZf3B+pjbochK+I9pr6IJsP+IKzUk4t9LdbhT9i60978CKcuk6h0BFgqVdWtrVpdAs3bOzt1J52ujFov7V/onOR7DrkaUv0uAPGrCF+dIUBKG5fqpQvd3Cl8+KUiTa6a39R8lrcUvb0hCopLG15ojbnRpaoXn27eHW7610K9vHomEtFpVHW9tewi5HFuqoDn9MaiXu7drUEq/wjbSvEeav34in6UZRLGxR2XTttAX+MiVcR7ACzPzbV/8zXSXBiWZzMv3y9LAy4uFpO33UdZtqhjUowOYGI8QF6oG1L89nK4J9OGgNb7M0mazX68dN0Usljbu1Gvcv6AXlHroGaqWr52bpqVLo3guBaApnXqilnVraxxdg7snXCDyAPTeF0n23UFkHtYJwFsSSbrYyB7yisoNdUbxBfZhWerkkqGm3sprE1hbJr6JQedIv/oY1rthHwOc48ncyEjS/kW5fiqslqWB0yq2ubICp0EJV2N/cWVPCqvK1GV+7Ialw+1kvKp9AF5WqCFaBSZ9M1GRV+Bxfa06+txulqPyANdEAeF9VejH7PtFSE4GhVTZkDNmQ//4BltRcWkF4uKc2LUNLaoXuioxtCrCbgbVWJgg/J4m0ZFh4IOUYNBPg99ctJaNpWdqi8nlraGG9DB7Ss+mkZy1bWyxujFkOXkgBtT8uGdAILcHqv6BrK3Au7EqMJIjQEq+yO7pW+hPWuGFa6MRraOEPTL+HNG6IVl8DixpjdgDOvMbt6u/s1mVrL9bQPDBmXmANZnL/uWQ1L0urX/yGbzAhNRjP02hp9yvZeKv8BjcsMutbrh0f0i6ZVufBInmIalz7UyTG9MDQnnHNYXKNY81rap+T1An6bz7tAi24vgFr1KVrL4DVjHOxBarzbcy4SpAJCnT5aGNxHfHuAqPPEVSt/pvrSuJAQ2qfL3H/JFiX8SWC2FdRbsjVthI9Fagr9AlXIhhPzBDvi1kSNRVoWnCh6ESNaHt83YzeuBStUuSaGkhN0yPaOriusbm0xqVoL4AL3f11qnXjeRnnLnxpRxlyg1plw3UV49a4+XRvyJlO0q8gN6jVoXcW95cZmtoF73bLXTAXAlr9F+dFkLiwnqHzLpcpHc2v1de8WCTZT/y5t4tLn/y54NMqRf5N3i1bC99ot+f+CNXqkyturLndztByPNbZc1+EJlN7MeEcaZFZ0jh7llJ4k0i6er6kaxWepdg+rDeMzP1gtRRuS0nSP67K3KWd8A5d1rev7XevpbALG3nXlHut/nc6L1FYu7FNbUovlUlXlyW/9oK/fxlhv2pm7bpM5wV5Q2uGW5vSzc+aa4+omk4qONpSKW2tvbnZ3i0Mv2PjCqIVstGKfc/e5lTe3TS0Qhba/fuczp58vtWZSytkoJX7vjcI0ngh0tKa3pQzoefTcmxYCWiFlMcEsaX5tLk73u9JlncvFO1LCm/q7F+IO7wDBdxyZ1MxGs//fQ7OZcXNv3PON3WkVi6ohW8CwXg3ms/y5bfDDUdXnfBWzs/mf+3gYLlH0eZgt5gwWs5n5XKexOskqFU2r8aXyuW3+RKBxGI1R9MChgUsjh2qoZ1Sqpr7V/ur5fJsPhYB3h5Vqyac0EgCvJPfv2Ml8bZ/huZoleLhq8ZHZ+9JU0Lsq1RtssKRdKuZC2rF1qdVlK3vE6SFx4m0ngNAPO9KJ3g1cjkKWonFyQVHO6V96O09fof2Hgzk0cZ9ywwv32dlioPE1HooZWoVfUr9DGlfkhDxsAOVqc0t4hQ3GL/n6VQSr1tz0D0zrJvtK+tj5fx7nElDkr0HwfjOT4hzM5eSr25uebueTDabzeOW/TMZ3rcYG1tF7yv+fq0WdcMRo3mYwfTmf/58+vmWZzas451HNa/kOz4hcJJGL7xxsRzasMmiPJPDuWIvF67Nhe5rxMvQ325ibj70pRI5cPJW8LyakNIRyylSTe4sZHITWwFbUFsPqRfmKWuN3GViq8HjDinnLPVYe7NJHqQfrE3k0sCftHQt854jHqWZtFaUWe+VyLQDzagnbjFO48SRgxcgZgzsDQ1G1bKqsVn62HyZmgqeyitCy+AuM2ha0s8oWgaWdQof7Vl1FmlL4i2o9R8BFKWljWO4k4m2HCjHaGNXuJbCxVmkLWVUYGNDTub0c3EmaZsPjAoh2LBTT+veE8YzSlui9WwEkEOwoSfKap5beRklAol3VyrIoUePh57W6zm0eZeV1l0rRBzdHHFu881+6YPHGWFJIeZYJfoMFlubqzknN+NRVtr8m/0bFHHUGd6R540v7KEhkyLBivLSHgyoZ4cm0ubq9kGdGWrNbiZHHd8dS2vcFCHJm/aywR0zjKSQ84+Tac2JYpxZ0xqlQtiUkFSb04a4kaG2jIbx/oGHuP92Rv2/qNsDHNhZrIYl8X+HJf8c2RzS7QAAAABJRU5ErkJggg==" alt="" />
                </div>
                <div className="block lg:hidden dropdown dropdown-left dropdown-start">
                    <div tabIndex={0} role="button" className="btn "><img className='h-[20px] w-[20px]' src="https://t3.ftcdn.net/jpg/01/09/45/80/360_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.webp" alt="" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>
                            <div className="flex space-x-2 bg-white rounded-3xl">
                                <img className="rounded-full w-[36px] h-[36px] sm:h-[56px] sm:w-[56px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACUCAMAAACnfDWKAAAAY1BMVEX///8AAAD19fX5+fnq6uqlpaXJycnm5ubDw8NkZGQ1NTV4eHjg4ODAwMDy8vLPz8+QkJCAgICvr688PDxPT08dHR0iIiJpaWmcnJxKSkrZ2dlfX18oKCiWlpYSEhKKiopXV1dR190ZAAAC/klEQVR4nO3a23aqMBAGYCMQUAQkHjgp+P5P2UzAXd1VSddqwMT/u+uSi0wnmUwIiwUAAAAAAAAAAAAAAAAAAAAAAAAAAIB9vLkHMAmPn3dMOcXCn3s0JoXJit1ZB5vl3IMyIxQ79kObcwen9FJchmwWXSCd4/0wnbvN3GP7a358oMgOXVT7auZ66SYTfbz7ZO7R/a2wn8GBfz9n00yFeyxnGpYRtQo1fvRTov4NnTsLN6N4dtHjH/2cft26Em29ltGsnpehUs3wCQdkkE+b6yp88URAe9CTxNvFo8RVr5slivY00XiMqmnPeZVXaUnrNp9mPCYtCxmHGHtqIzuONptiPEZRJS7GHxMHrcfe3EovZTQBdranNqXFqHOyodSejQ/HLCGD1Wp9PbkZF5YfcGUzuNc71XT2z+Oj7AT1nqx1qvZbyw76jaAM1u7TT9Kyk+5plc5FqdHRGFb+YiHKvmJldYWSbWBVaz4rK1Qz0la+t1y7GC8WW8YunxSs3Znd/mLNFravWdGyte6p/GR7NeYta3U7Bbn1nK1+E5Uetdv70PoOanHQbu8Dxo6Wv4cqtV+lySNDY/lFCE3OUmclclmfOuPDMUwmbK2TMLkja3fRbythWoc8Ls/ujdW1mKSVjHa0PU5jpr9HvbFE5wU4vb2pphiNYWk+/jKV022P1a3iVV2N3UnS+wxXbrYS2Ua12+dtb3akO3knErvoV2QbPzm+eeKkrqrtr8UDoW6jH1ZbP2+HD2cKV74SUtE+upAuVVobld2V1Qe8G+r2nbF95C+v09VLN9v+W6iubypY48q6DfPTMFvLiGcZ5yLv428vqkuM6K/C6tcyN7zo3+q8dQmGdHLaf2y/7fm2jLr1f6EW4nsZRxRt48q6leGG/FxdAz0Uor4LTeW2caUmK56X1hnPQu/nvkpnWpdy+1pfk12pUmPcqslj+PHjor18zLqlaJu5RzEVVZMt/7pCH6/ayqnd9qWN+JQKBQAAAAAAAAAAAAAAAAAAAAAAAADgki+R+RqFxnKHfwAAAABJRU5ErkJggg==" alt="" />
                                <input className="rounded-3xl w-[120px] border-none" type="text" name="" id="" />
                            </div>
                        </a></li>
                        <li className='text-red-200 font-medium'><a>Home</a></li>
                        <li><a>Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navbar;