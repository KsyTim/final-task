import React from "react";
import { Link } from 'react-router-dom'; 
import AuthState from "../../states/AuthState/AuthState";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { HeaderProfile } from "./HeaderProfile/HeaderProfile";

export const Header = () => {
  const auth = AuthState.isAuth;
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to="/" className="header-logo">
          <svg width="120" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.23 2.17h-.327c-1.31 0-2.331.405-3.065 1.216-.714.794-1.071 2.214-1.071 4.26 0 .652.07 1.11.208 1.375.14.247.208.388.208.423-1.07 0-1.874-.194-2.41-.582C.259 8.457 0 7.795 0 6.878c0-1.252.347-2.39 1.041-3.412.695-1.041 1.795-1.879 3.303-2.514C5.87.317 7.805 0 10.145 0c.715 0 1.696.08 2.946.238.119.018.585.07 1.398.159a24.01 24.01 0 0 0 2.53.132c1.487 0 2.925-.167 4.313-.503-.238 1.164-.644 2.143-1.22 2.937-.575.776-1.398 1.164-2.469 1.164a8.823 8.823 0 0 1-1.904-.185 26.445 26.445 0 0 1-1.994-.609 32.18 32.18 0 0 0-2.35-.688l-1.28 5.292h3.75l-.476 1.957h-3.75l-2.41 9.947H2.946L7.23 2.17ZM16.334 20c-.952 0-1.726-.265-2.32-.794-.576-.529-.864-1.322-.864-2.38 0-.442.08-1.015.239-1.72l2.023-8.492h4.284l-2.142 8.994c-.08.265-.12.547-.12.847 0 .353.09.609.269.767.198.141.515.212.952.212.575 0 1.11-.212 1.606-.635.496-.441.853-1.005 1.071-1.693h1.25c-.734 1.905-1.676 3.2-2.826 3.889-1.15.67-2.291 1.005-3.422 1.005Z" fill="#000"/>
            <path d="M32.06 20c-1.21 0-2.102-.282-2.677-.847-.555-.582-.833-1.296-.833-2.142 0-.37.05-.785.149-1.244.099-.476.198-.934.297-1.375.12-.441.198-.724.238-.847.159-.617.308-1.226.446-1.825.14-.6.209-1.085.209-1.455 0-.9-.357-1.35-1.071-1.35-.516 0-.972.23-1.369.688-.397.441-.714 1.023-.952 1.746l-2.023 8.492h-4.285l3.154-13.227h4.285L27.3 7.989c.992-.987 2.152-1.481 3.481-1.481 1.012 0 1.815.247 2.41.74.595.495.893 1.244.893 2.25 0 .51-.07 1.084-.209 1.719a41.784 41.784 0 0 1-.595 2.275 64.921 64.921 0 0 0-.446 1.614c-.119.511-.178.917-.178 1.217 0 .352.089.626.267.82.179.194.486.29.923.29.595 0 1.07-.184 1.428-.555.357-.388.714-.979 1.07-1.772h1.25c-.733 1.94-1.586 3.245-2.558 3.915-.952.653-1.944.979-2.975.979Z" fill="#000"/>
            <path d="M39.912 20c-1.13 0-2.073-.344-2.827-1.032-.754-.688-1.13-1.763-1.13-3.227 0-1.305.287-2.672.862-4.1a9.498 9.498 0 0 1 2.619-3.652c1.17-1.005 2.558-1.508 4.165-1.508.813 0 1.418.124 1.815.37.397.248.595.574.595.98v.185l.327-1.402h4.285l-2.143 8.995c-.079.264-.119.546-.119.846 0 .758.407 1.138 1.22 1.138.555 0 1.032-.23 1.428-.688.417-.459.744-1.058.982-1.8h1.25c-.734 1.906-1.647 3.202-2.737 3.89C49.431 19.665 48.35 20 47.26 20c-.834 0-1.508-.203-2.024-.608-.495-.424-.793-1.032-.892-1.826a7.994 7.994 0 0 1-1.934 1.773c-.694.44-1.527.661-2.5.661Zm1.934-2.566c.495 0 .981-.203 1.457-.609.496-.423.834-.996 1.012-1.72l1.428-5.978c0-.23-.1-.45-.297-.661-.199-.23-.506-.344-.923-.344-.793 0-1.507.414-2.142 1.243-.635.811-1.13 1.799-1.487 2.963-.358 1.146-.536 2.16-.536 3.042 0 .882.139 1.447.417 1.694.297.246.654.37 1.07.37Z" fill="#000"/>
            <path d="M54.888 20c-.952 0-1.726-.265-2.32-.794-.576-.546-.863-1.358-.863-2.433 0-.441.079-1.015.238-1.72l3.183-13.254 4.403-.53-3.421 14.287c-.08.264-.12.52-.12.767 0 .705.407 1.058 1.22 1.058.358 0 .675-.053.953-.159-.08.882-.437 1.57-1.071 2.064-.615.476-1.35.714-2.202.714ZM73.508 2.328h-.357c-1.766 0-3.144.397-4.136 1.19-.972.777-1.458 2.161-1.458 4.154 0 .653.07 1.111.209 1.376.138.247.208.388.208.423-1.071 0-1.875-.194-2.41-.582-.516-.406-.774-1.067-.774-1.984 0-1.252.347-2.39 1.042-3.413.694-1.04 1.795-1.878 3.302-2.513 1.527-.635 3.461-.953 5.802-.953 1.309 0 2.717.106 4.225.318 1.27.194 2.4.29 3.391.29 1.27 0 2.42-.184 3.452-.555-.04 1.147-.367 1.993-.982 2.54-.615.547-1.527.82-2.737.82-.635 0-1.27-.044-1.904-.132a72.111 72.111 0 0 1-2.708-.45l-4.106 16.984h-4.284l4.225-17.513Z" fill="#000"/>
            <path d="M82.506 20c-1.13 0-2.073-.344-2.826-1.032-.754-.688-1.13-1.763-1.13-3.227 0-1.305.287-2.672.862-4.1a9.498 9.498 0 0 1 2.618-3.652c1.17-1.005 2.559-1.508 4.165-1.508.814 0 1.419.124 1.815.37.397.248.595.574.595.98v.185l.328-1.402h4.284l-2.142 8.995c-.08.264-.12.546-.12.846 0 .758.407 1.138 1.22 1.138.556 0 1.032-.23 1.429-.688.416-.459.743-1.058.982-1.8h1.25c-.735 1.906-1.647 3.202-2.738 3.89-1.071.67-2.152 1.005-3.243 1.005-.833 0-1.508-.203-2.023-.608-.496-.424-.794-1.032-.893-1.826a7.99 7.99 0 0 1-1.934 1.773c-.694.44-1.527.661-2.499.661Zm1.934-2.566c.496 0 .982-.203 1.458-.609.496-.423.833-.996 1.011-1.72l1.429-5.978c0-.23-.1-.45-.298-.661-.198-.23-.506-.344-.922-.344-.794 0-1.508.414-2.142 1.243-.635.811-1.131 1.799-1.488 2.963-.357 1.146-.536 2.16-.536 3.042 0 .882.14 1.447.417 1.694.297.246.654.37 1.071.37Z" fill="#000"/>
            <path d="M97.988 20c-.952 0-1.755-.159-2.41-.476-.654-.335-1.14-.759-1.457-1.27-.318-.53-.477-1.076-.477-1.64 0-.582.16-1.085.477-1.508.297-.441.664-.759 1.1-.953a32.856 32.856 0 0 0 2.023-3.73 51.082 51.082 0 0 0 1.637-4.1l4.403-.53c.099 2.258.268 4.7.506 7.329.099 1.058.149 1.825.149 2.301 0 .406-.04.741-.119 1.006.932-.477 1.646-.917 2.142-1.323h1.249c-1.269 1.305-2.786 2.407-4.552 3.307-.575.546-1.289.952-2.142 1.217a8.854 8.854 0 0 1-2.529.37Zm-.952-2.09c.734 0 1.349-.194 1.845-.582.496-.388.744-1.014.744-1.878 0-.53-.06-1.27-.179-2.223-.198-2.01-.327-3.36-.387-4.047-.476 1.393-1.279 3.06-2.41 5 .457.212.685.52.685.926 0 .335-.13.635-.387.9a1.184 1.184 0 0 1-.922.396c-.417 0-.685-.114-.804-.344 0 .635.14 1.102.417 1.402.297.3.763.45 1.398.45Z" fill="#000"/>
            <path d="M117.144 20c-1.23 0-2.162-.256-2.797-.767-.635-.53-.952-1.279-.952-2.249 0-.423.06-.882.179-1.376l.238-1.031c.079-.3.119-.626.119-.98 0-.846-.357-1.269-1.072-1.269-.317 0-.654.08-1.011.238-.337.159-.734.406-1.19.74l-1.547 6.535h-4.285l4.314-17.99 4.404-.528-2.232 9.312 5.743-4.021H120l-5.95 3.677c.297-.07.624-.106.981-.106 1.071 0 1.885.291 2.44.873.555.582.833 1.323.833 2.222 0 .37-.04.706-.119 1.006l-.327 1.322c-.099.318-.149.6-.149.847 0 .653.387.979 1.16.979.437 0 .714-.027.833-.08.119-.052.189-.079.209-.079-.04.582-.228 1.076-.566 1.482a3.195 3.195 0 0 1-1.13.925c-.417.212-.774.318-1.071.318Z" fill="#000"/>
          </svg>
        </Link>
        {auth &&
          <>
            <HeaderNav />
            <HeaderProfile />
          </>    
        }      
      </div>
    </header>
  )
}