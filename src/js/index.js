"use strict";
import slick from "./slickSlider";

window.onload=()=>{
  $(".burger_menu").click(()=>{
    if (document.querySelectorAll(".burger_menu")[0].classList.contains("active")) {
      document.querySelectorAll(".mob_header")[0].classList.remove("active");
      $(".burger_menu").removeClass("active");
      if(window.innerWidth<=767){
        document.body.classList.remove("hiadden");
      }
    } else {
      if(window.innerWidth<=767){
        document.body.classList.add("hiadden");
      }
      document.querySelectorAll(".mob_header")[0].classList.add("active");
      $(".burger_menu").addClass("active");
    }
  })
}

function resizeheight() {
  document.querySelectorAll(".container_checkout_select_content>div:nth-child(n+2)>div:nth-child(n+3):nth-child(-n+6)").forEach((Element, i) => {
    var test = Element;
    var height = window.getComputedStyle(test, null).height;
    if (Element.parentNode.lastChild.children[i + 2] === undefined) {
    } else {
      Element.parentNode.lastChild.children[i + 2].style.height = height;
    }
  });
}
if (document.querySelectorAll(".header_top_right_come")[0]) {
  document.querySelectorAll(".header_top_right_come")[0].addEventListener('click',()=>{
    document.querySelectorAll(".come_pop_up")[0].classList.add("active");
    document.body.classList.add("hiadden");
  }) 
  document.querySelectorAll(".header_top_right_come")[1].addEventListener('click',()=>{
    document.querySelectorAll(".come_pop_up")[0].classList.add("active");
    document.body.classList.add("hiadden");
  }) 
}
if (document.querySelectorAll(".container_checkout_select_head")[0]) {
  document.querySelectorAll(".container_checkout_select_head")[0].onclick = () => {
    if (document.querySelectorAll(".container_checkout_select_head")[0].classList.contains("active")) {
      document.querySelectorAll(".container_checkout_select_head")[0].classList.remove("active");
      document.querySelectorAll(".container_checkout_select_content")[0].classList.remove("active");
      
    } else {
      document.querySelectorAll(".container_checkout_select_head")[0].classList.add("active");
      document.querySelectorAll(".container_checkout_select_content")[0].classList.add("active");
    }
    resizeheight();
  };
}
document.querySelectorAll(".close_button").forEach(Element => {
  Element.onclick = () => {
    Element.parentNode.parentNode.classList.remove("active");
    document.body.classList.remove("hiadden");
  };
});
if (document.querySelectorAll(".container_checkout_center_tabs_account_text span")[0]) {
  document.querySelectorAll(".container_checkout_center_tabs_account_text span")[0].onclick = () => {
    document.querySelectorAll(".come_pop_up")[0].classList.add("active");
    document.body.classList.add("hiadden");
  };
}

if (document.querySelectorAll(".header_top_right_come .pop_up_text_head span")[0]) {
  document.querySelectorAll(".header_top_right_come .pop_up_text_head span")[0].onclick = () => {
    document.querySelectorAll(".authorization_pop_up")[0].classList.add("active");
    document.body.classList.add("hiadden");
    document.querySelectorAll(".come_pop_up")[0].classList.remove("active");
  };
}

document.querySelectorAll(".come_pop_up .pop_up_text_head span")[0].onclick = () => {
  document.querySelectorAll(".authorization_pop_up")[0].classList.add("active");
  document.body.classList.add("hiadden");
  document.querySelectorAll(".come_pop_up")[0].classList.remove("active");
};

document.querySelectorAll(".come_pop_up .bottom_container_pop_up span")[0].onclick = () => {
  document.querySelectorAll(".password_pop_up")[0].classList.add("active");
  document.body.classList.add("hiadden");
  document.querySelectorAll(".come_pop_up")[0].classList.remove("active");
};

if (window.innerWidth <= 766) {
  document.querySelectorAll(".container_checkout_select_content>div").forEach(Element => {
    if (Element.classList.length === 0) {
      Element.appendChild(document.querySelectorAll(".container_checkout_select_content_top")[0].cloneNode(true));
    }
  });

  window.onresize = () => {
    resizeheight();
  };
}
if (window.innerWidth >= 1200) {
  var list_hover = document.querySelectorAll("header .header_bottom_list.desctops>li");

  list_hover.forEach(Element => {
    Element.onmouseover = event => {
      if (Element.children[1] === undefined) {
      } else {
        $(Element).popover({ container: "body", content: Element.children[1].innerHTML, html: true, placement: "bottom", trigger: "focus" });
        $(Element).popover("show");
        document.body.onmouseover = e => {
          var popover = document.querySelectorAll(".popover")[0];
          if (popover) {
            if (!popover.contains(e.target) && !Element.contains(e.target)) {
              list_hover.forEach(ElementNew => {
                $(ElementNew).popover("hide");
              });
            } else {
              $(Element).popover("show");
            }
          }
        };
      }
    };
  });

  var list_hover_fixed = document.querySelectorAll(".fixed_header .header_bottom_list>li");

  list_hover_fixed.forEach(Element => {
    Element.onmouseover = event => {
      if (Element.children[1] === undefined) {
      } else {
        $(Element).popover({ container: "body", content: Element.children[1].innerHTML, html: true, placement: "bottom", trigger: "focus" });
        $(Element).popover("show");
        document.body.onmouseover = e => {
          var popover = document.querySelectorAll(".popover")[0];
          if (popover) {
            if (!popover.contains(e.target) && !Element.contains(e.target)) {
              list_hover_fixed.forEach(ElementNew => {
                $(ElementNew).popover("hide");
              });
            } else {
              $(Element).popover("show");
            }
          }
        };
      }
    };
  });
}
if (window.innerWidth <= 1200) {
  $(".container_home .container_tabs_items_row>div.active").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
}
document.querySelectorAll(".container_tabs_items_list ul li").forEach((Element, i) => {
  Element.onclick = () => {
    document.querySelectorAll(".container_tabs_items_list ul li").forEach((ElementNew, j) => {
      if (ElementNew.classList.contains("active")) {
        ElementNew.classList.remove("active");
        document.querySelectorAll(".container_tabs_items_row>div")[j].classList.remove("active");
      }
    });

    document.querySelectorAll(".container_tabs_items_row>div")[i].classList.add("active");
    Element.classList.add("active");
  };
});

if (window.innerWidth <= 1200) {
  if (document.querySelectorAll(".container_list_items")[0]) {
    document.querySelectorAll(".container_list_items")[0].appendChild(document.querySelectorAll(".container_right_head")[0]);
    document.querySelectorAll(".container_list_items>div").forEach(Element => {
      Element.classList.remove("col-md-4");
      Element.classList.add("col-md-6");
    });
  }
  if (document.querySelectorAll(".container_tabs_items_row>div div")[0]) {
    document.querySelectorAll(".container_tabs_items_row>div div").forEach(Element => {
      if (Element.classList.contains("col-md-3")) {
        Element.classList.remove("col-md-3");
        Element.classList.add("col-md-4");
      }
    });
  }
  if (document.querySelectorAll(".container_besseller_items div")[0]) {
    document.querySelectorAll(".container_besseller_items div").forEach(Element => {
      if (Element.classList.contains("col-md-3")) {
        Element.classList.remove("col-md-3");
        Element.classList.add("col-md-4");
      }
    });
  }
}
if (window.innerWidth >= 1200) {
  if (document.querySelectorAll(".fixed_header")[0]) {
    function scrolladd() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      var heightScroll = document.querySelectorAll("header")[0].clientHeight;
      if (scrolled > heightScroll) {
        document.querySelectorAll(".fixed_header")[0].classList.add("fixed");
      } else {
        document.querySelectorAll(".fixed_header")[0].classList.remove("fixed");
      }
    }
    window.onscroll = () => {
      scrolladd();
    };
    scrolladd();
  }
}

if (document.querySelectorAll(".container_tabs_items_list select")[0]) {
  document.querySelectorAll(" .container_tabs_items_list>ul>li").forEach((Element, i) => {
    let option = document.createElement("option");
    option.innerText = Element.innerText;
    option.setAttribute("data-index", i);
    document.querySelectorAll(" .container_tabs_items_list select")[0].appendChild(option);
  });
  document.querySelectorAll(".container_tabs_items_list select")[0].onchange = e => {
    document.querySelectorAll(".container_tabs_items_list select option").forEach(Element => {
      if (Element.innerText === e.target.value) {
        document.querySelectorAll(".container_tabs_items_row>div")[Element.dataset.index].classList.add("active");
      } else {
        document.querySelectorAll(".container_tabs_items_row>div")[Element.dataset.index].classList.remove("active");
      }
      $(document.querySelectorAll(".container_tabs_items_row>div")[Element.dataset.index])
        .not(".slick-initialized")
        .slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
          ],
        });
    });
  };
}
if (window.innerWidth <= 767) {
  document.querySelectorAll(".fixed>li").forEach(Element => {
    var divCreate = document.createElement("div");
    divCreate.classList.add("text_click");
    divCreate.appendChild(Element.children[0]);
    Element.appendChild(divCreate);
    if (Element.children.length > 1) {
      Element.classList.add("arrow");
    }
  });
  document.querySelectorAll(".text_click").forEach(Element => {
    Element.onclick = () => {
      if (Element.parentNode.classList.contains("active")) {
        document.querySelectorAll(".text_click").forEach(ElementNew => {
          ElementNew.parentNode.classList.remove("active");
        });
      } else {
        document.querySelectorAll(".text_click").forEach(ElementNew => {
          ElementNew.parentNode.classList.remove("active");
        });
        Element.parentNode.classList.add("active");
      }
    };
  });

  document.querySelectorAll(".mob_header .header_bottom_head")[0].appendChild(document.querySelectorAll("header>.header_bottom .header_bottom_head_list")[0].cloneNode(true));
}
$(document).on("click", ".number-spinner button", function() {
  var btn = $(this),
    oldValue = btn
      .closest(".number-spinner")
      .find("input")
      .val()
      .trim(),
    newVal = 0;

  if (btn.attr("data-dir") == "up") {
    newVal = parseInt(oldValue) + 1;
  } else {
    if (oldValue > 1) {
      newVal = parseInt(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }
  btn
    .closest(".number-spinner")
    .find("input")
    .val(newVal);
});
if (document.querySelectorAll(".feedback_container_head_text_click")[0]) {
  document.querySelectorAll(".feedback_container_head_text_click")[0].onclick = () => {
    document.querySelectorAll(".feedback_container")[0].classList.add("active");
  };
  document.querySelectorAll(".feedback_container_head_text_click_prev")[0].onclick = () => {
    document.querySelectorAll(".feedback_container")[0].classList.remove("active");
  };
}
if (document.querySelectorAll(".container_catalog_all_items_right .dropdown button")[0]) {
  document.querySelectorAll(".container_catalog_all_items_right .dropdown button")[0].onclick = () => {
    document.querySelectorAll(".container_catalog_all_items_right .dropdown-item").forEach(Element => {
      Element.onclick = () => {
        document.querySelectorAll(".container_catalog_all_items_right .dropdown-item").forEach(ElementNew => {
          ElementNew.classList.remove("active");
          ElementNew.classList.remove("disabled");
        });
        Element.classList.add("active");
        document.querySelectorAll(".container_catalog_all_items_right .dropdown button")[0].innerText = Element.innerText;
      };
    });
  };
}

var slider = document.querySelectorAll(".rangeslider")[0];
if (slider) {
  var newslide = new noUiSlider.create(slider, {
    start: [5000, 30000],
    connect: true,
    range: {
      min: 0,
      max: 35000,
    },
  });
  var nodes = [
    document.querySelectorAll(".range_inputs>div>input")[0], // 0
    document.querySelectorAll(".range_inputs>div>input")[1],
  ];
  slider.noUiSlider.on("update", function(values, handle, unencoded, isTap, positions) {
    nodes[handle].value = Number(values[handle]).toFixed();
  });
  document.querySelectorAll(".ranrange_inputs_button")[0].addEventListener("change", function() {
    slider.noUiSlider.set([null, this.value]);
  });
}
if (window.innerWidth >= 1200) {
  if (document.querySelectorAll(".checkbox_container_all .custom-checkbox")[0]) {
    document.querySelectorAll(".checkbox_container_all .custom-checkbox").forEach(Element => {
      Element.onclick = e => {
        e.preventDefault();

        if (document.querySelectorAll(".filters_select")[0].classList.contains("active")) {
          document.querySelectorAll(".filters_select")[0].classList.remove("active");
          Element.querySelectorAll("input")[0].checked = false;
        } else {
          Element.querySelectorAll("input")[0].checked = true;
          document.querySelectorAll(".filters_select")[0].classList.add("active");
          Element.appendChild(document.querySelectorAll(".filters_select")[0]);
        }
      };
    });
  }
}
if (document.querySelectorAll(".filter_click")[0]) {
  document.querySelectorAll(".filter_click")[0].onclick = () => {
    document.body.classList.add("hiadden");
    document.querySelectorAll(".container_catalog_all_filter")[0].classList.add("active");
    document.querySelectorAll(".backgraund_wrapper")[0].classList.add("active");
  };

  document.querySelectorAll(".filter_text img")[0].onclick = () => {
    document.body.classList.remove("hiadden");
    document.querySelectorAll(".container_catalog_all_filter")[0].classList.remove("active");
    document.querySelectorAll(".backgraund_wrapper")[0].classList.remove("active");
  };
  document.querySelectorAll(".backgraund_wrapper")[0].onclick = () => {
    document.body.classList.remove("hiadden");
    document.querySelectorAll(".container_catalog_all_filter")[0].classList.remove("active");
    document.querySelectorAll(".backgraund_wrapper")[0].classList.remove("active");
  };
}
document.querySelectorAll(".authorization_pop_up .pop_up_text_all span")[0].onclick=()=>{
  document.querySelectorAll(".come_pop_up")[0].classList.add("active");
  document.querySelectorAll(".authorization_pop_up ")[0].classList.remove("active");
  document.body.classList.add("hiadden");
}