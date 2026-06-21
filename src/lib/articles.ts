import type { Metadata } from "next";

export interface Article {
  slug: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  sections: ArticleSection[];
}

export interface ArticleSection {
  type: "heading" | "paragraph" | "quote" | "list" | "divider";
  content?: string;
  items?: string[];
}

export const articles: Article[] = [
  {
    slug: "mo-thuc-noi-tam-co-ban",
    tag: "Mô thức",
    tagColor: "#7C6FF7",
    title: "9 mô thức nội tâm cơ bản và cách nhận diện mô thức của bạn",
    excerpt: "Mỗi người trong chúng ta đều vận hành theo một mô thức cốt lõi — một cách nhìn thế giới và phản ứng với nó được hình thành từ rất sớm trong cuộc đời.",
    readTime: "8 phút",
    publishDate: "Tháng 1, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn có bao giờ tự hỏi: Tại sao mình cứ lặp lại cùng một kiểu phản ứng? Cùng một kiểu xung đột? Cùng một kiểu cảm giác trong những tình huống khác nhau — dù bạn đã cố thay đổi rất nhiều lần?"
      },
      {
        type: "paragraph",
        content: "Câu trả lời không nằm ở ý chí hay sự cố gắng. Nó nằm sâu hơn — ở mô thức nội tâm."
      },
      {
        type: "heading",
        content: "Mô thức nội tâm là gì?"
      },
      {
        type: "paragraph",
        content: "Mô thức nội tâm là một hệ thống niềm tin cốt lõi — về bản thân, về người khác, về thế giới — được hình thành trong những năm đầu đời khi não bộ còn đang học cách tồn tại an toàn."
      },
      {
        type: "paragraph",
        content: "Đứa trẻ nào cũng phải trả lời ba câu hỏi sinh tồn: Mình có đáng được yêu không? Mình có an toàn không? Mình có đủ năng lực để tồn tại không? Cách não bộ non nớt trả lời ba câu hỏi đó — dựa trên trải nghiệm thực tế với cha mẹ và môi trường — chính là mầm mống của mô thức."
      },
      {
        type: "quote",
        content: "Mô thức không phải tính cách. Nó là thấu kính — thứ quyết định bạn nhìn thấy gì, cảm thấy gì, và phản ứng thế nào với mọi thứ xảy ra trong cuộc đời."
      },
      {
        type: "heading",
        content: "9 mô thức cơ bản"
      },
      {
        type: "paragraph",
        content: "Dựa trên hệ thống Enneagram và nghiên cứu tâm lý học phát triển, có 9 mô thức nội tâm cơ bản mà con người thường vận hành theo:"
      },
      {
        type: "list",
        items: [
          "Mô thức Hoàn Hảo — Nỗi sợ sai và niềm tin rằng mình chỉ có giá trị khi làm đúng. Luôn có một tiếng phán xét nhỏ bên trong: 'Cái này chưa đủ tốt.'",
          "Mô thức Cho Đi — Cho đi để được yêu. Khó nhận, khó từ chối. Cảm thấy tội lỗi khi đặt nhu cầu bản thân lên trên.",
          "Mô thức Thành Tích — Giá trị bản thân gắn với kết quả. Dừng lại = lo lắng. Cần thành công liên tục để cảm thấy ổn.",
          "Mô thức Độc Đáo — Luôn cảm thấy mình khác biệt, thiếu thứ gì đó mà người khác có. Sống nhiều trong cảm xúc và kéo dài đau thương.",
          "Mô thức Thu Mình — Bảo vệ năng lượng, sợ bị xâm phạm. Cần không gian riêng như cần oxy. Quan sát nhiều, nói ít.",
          "Mô thức An Toàn — Lo lắng và hoài nghi là nền tảng. Luôn tìm kiếm mối nguy trước khi thư giãn. Trung thành và có trách nhiệm cao.",
          "Mô thức Phiêu Lưu — Cần kích thích liên tục, sợ đau và sự tẻ nhạt. Lạc quan, sáng tạo, nhưng né tránh cảm xúc nặng nề.",
          "Mô thức Kiểm Soát — Sức mạnh và tự lập là giá trị cốt lõi. Sợ bị kiểm soát hơn bất cứ điều gì. Bảo vệ người yếu, đối đầu với kẻ mạnh.",
          "Mô thức Hòa Bình — Xung đột là kẻ thù. Dễ dàng nhìn thấy nhiều phía, khó quyết định. Thường quên mất nhu cầu của chính mình."
        ]
      },
      {
        type: "heading",
        content: "Cách nhận diện mô thức của bạn"
      },
      {
        type: "paragraph",
        content: "Đừng tìm mô thức qua những lúc bình thường. Hãy nhìn vào lúc bạn đang căng thẳng — đó là khi mô thức bộc lộ rõ nhất."
      },
      {
        type: "paragraph",
        content: "Hỏi bản thân ba câu này:"
      },
      {
        type: "list",
        items: [
          "Khi mọi thứ đi sai, nỗi sợ đầu tiên xuất hiện trong đầu là gì?",
          "Điều gì khiến mình phản ứng mạnh nhất — dù người khác xem là bình thường?",
          "Mình đang cố bảo vệ điều gì trong mỗi mối quan hệ?"
        ]
      },
      {
        type: "paragraph",
        content: "Mô thức không phải điểm yếu cần xóa bỏ. Nó là hệ thống bảo vệ từng giúp bạn sống sót qua giai đoạn khó khăn nhất. Vấn đề là nó đang hoạt động ở những tình huống không còn cần nó nữa."
      },
      {
        type: "quote",
        content: "Bạn không thể thay đổi thứ bạn chưa nhìn thấy. Nhận diện mô thức là bước đầu tiên để không còn bị nó điều khiển."
      },
      {
        type: "heading",
        content: "Bước tiếp theo"
      },
      {
        type: "paragraph",
        content: "Đọc về 9 mô thức chỉ cho bạn bản đồ tổng quan. Thứ thực sự thay đổi là khi bạn nhìn thấy MÔ THỨC CỦA MÌNH — không phải của ai khác. Không phải lý thuyết — là cái đang vận hành trong cuộc sống của bạn hôm nay."
      }
    ]
  },
  {
    slug: "y-chi-khong-du-thay-doi-hanh-vi",
    tag: "Khoa học thần kinh",
    tagColor: "#18B5B0",
    title: "Tại sao ý chí không đủ: Khoa học đằng sau thay đổi hành vi",
    excerpt: "Chúng ta được dạy rằng thay đổi cần ý chí. Nhưng khoa học thần kinh cho thấy điều ngược lại — ý chí là nguồn tài nguyên có hạn và dễ cạn kiệt.",
    readTime: "6 phút",
    publishDate: "Tháng 1, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn từng thức khuya lập kế hoạch thay đổi cuộc sống. Bạn viết xuống, bạn quyết tâm, bạn bắt đầu mạnh mẽ. Rồi tuần thứ hai, mọi thứ dần tan biến."
      },
      {
        type: "paragraph",
        content: "Bạn tự trách mình thiếu kỷ luật. Thiếu ý chí. Không đủ mạnh mẽ."
      },
      {
        type: "paragraph",
        content: "Nhưng khoa học thần kinh nói điều khác hoàn toàn."
      },
      {
        type: "heading",
        content: "Ý chí là cơ bắp — và nó mệt mỏi"
      },
      {
        type: "paragraph",
        content: "Năm 1998, nhà tâm lý học Roy Baumeister thực hiện một thí nghiệm nổi tiếng. Ông cho hai nhóm người vào phòng có bánh quy socola thơm nức và củ cải. Nhóm một được ăn bánh. Nhóm hai phải nhịn bánh và ăn củ cải — tức là họ phải dùng ý chí để kháng cự."
      },
      {
        type: "paragraph",
        content: "Sau đó, cả hai nhóm được giao bài toán khó. Nhóm đã dùng ý chí để nhịn bánh bỏ cuộc nhanh hơn hẳn — họ đã cạn kiệt nguồn lực tự kiểm soát."
      },
      {
        type: "quote",
        content: "Ý chí không phải đặc điểm tính cách. Nó là nguồn tài nguyên có hạn, bị tiêu hao theo thời gian trong ngày — giống như năng lượng thể chất."
      },
      {
        type: "heading",
        content: "Vùng não nào chịu trách nhiệm?"
      },
      {
        type: "paragraph",
        content: "Vỏ não trước trán (prefrontal cortex) — phần não tiến hóa nhất của con người — chịu trách nhiệm về tự kiểm soát, ra quyết định và kháng cự cám dỗ. Đây là phần 'lý trí' của não."
      },
      {
        type: "paragraph",
        content: "Vấn đề: phần não này tiêu thụ rất nhiều glucose — nhiên liệu của não. Khi đói, mệt, stress, hoặc sau một ngày dài ra nhiều quyết định — vỏ não trước trán yếu đi. Phần não cảm xúc và bản năng (hệ limbic) lên ngôi."
      },
      {
        type: "paragraph",
        content: "Đó là lý do bạn ăn nhiều vào buổi tối. Bạn nóng giận hơn sau một ngày mệt. Bạn phá vỡ kế hoạch vào thứ Sáu sau một tuần kỷ luật."
      },
      {
        type: "heading",
        content: "Vậy thay đổi thật sự hoạt động như thế nào?"
      },
      {
        type: "paragraph",
        content: "Thay đổi hành vi bền vững không dựa vào ý chí — nó dựa vào thiết kế môi trường và hệ thống thần kinh."
      },
      {
        type: "list",
        items: [
          "Thiết kế môi trường: Người ta không ăn rau vì họ có ý chí hơn bạn. Họ để rau ở tầm mắt trong tủ lạnh và giấu bánh đi. Não bộ đi theo đường mòn ít kháng cự nhất.",
          "Dùng identity, không dùng outcome: 'Mình đang trở thành người chạy bộ' mạnh hơn 'Mình phải chạy bộ 5km mỗi ngày'. Hành vi theo sau bản sắc, không phải ngược lại.",
          "Tận dụng thời điểm có ý chí cao: Buổi sáng sau khi ngủ đủ giấc, não bộ phục hồi đầy đủ. Làm việc quan trọng nhất lúc đó — đừng dùng buổi sáng để check email.",
          "Làm nhỏ hành vi đến mức không thể thất bại: Muốn thiền mỗi ngày? Bắt đầu với 2 phút. Não không cảm thấy đe dọa với thứ nhỏ bé."
        ]
      },
      {
        type: "heading",
        content: "Nhưng có một thứ quan trọng hơn tất cả"
      },
      {
        type: "paragraph",
        content: "Hành vi bề mặt thay đổi được bằng kỹ thuật. Nhưng mô thức sâu — những niềm tin vô thức về bản thân và thế giới — đó mới là thứ điều khiển bạn khi ý chí cạn kiệt."
      },
      {
        type: "paragraph",
        content: "Một người tin rằng 'mình không xứng đáng với sức khỏe tốt' sẽ tự sabotage mọi kế hoạch tập luyện — dù họ biết đầy đủ kỹ thuật. Một người tin rằng 'mình luôn thất bại' sẽ vô thức tạo ra hoàn cảnh để xác nhận điều đó."
      },
      {
        type: "quote",
        content: "Kỹ thuật thay đổi hành vi có thể dạy bạn làm khác đi. Nhưng chỉ khi hiểu mô thức, bạn mới thực sự muốn khác đi — từ bên trong."
      }
    ]
  },
  {
    slug: "tai-sao-ban-cu-thu-hut-cung-mot-kieu-nguoi",
    tag: "Quan hệ",
    tagColor: "#E8A87C",
    title: "Tại sao bạn cứ thu hút về phía mình cùng một kiểu người?",
    excerpt: "Không phải ngẫu nhiên. Mô thức nội tâm của bạn đang tích cực lựa chọn — và thường lựa chọn những gì quen thuộc, không phải những gì tốt cho bạn.",
    readTime: "7 phút",
    publishDate: "Tháng 2, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Người bạn yêu thứ nhất làm bạn cảm thấy không đủ tốt. Người thứ hai cũng vậy. Người thứ ba — bạn thề là hoàn toàn khác — nhưng rồi cũng vậy."
      },
      {
        type: "paragraph",
        content: "Bạn tự hỏi: Mình có vấn đề gì với việc chọn người? Hay mình xui xẻo? Hay tất cả đàn ông/phụ nữ đều như vậy?"
      },
      {
        type: "paragraph",
        content: "Không phải. Có một cơ chế tâm lý đang vận hành — và nó không phải ngẫu nhiên."
      },
      {
        type: "heading",
        content: "Não bộ yêu thích thứ quen thuộc"
      },
      {
        type: "paragraph",
        content: "Khi bạn gặp một người, não bộ không chỉ xử lý thông tin về họ. Nó so sánh với hàng nghìn mẫu ký ức từ quá khứ — đặc biệt là ký ức cảm xúc từ thời thơ ấu."
      },
      {
        type: "paragraph",
        content: "Nếu bạn lớn lên với một người cha lạnh lùng, cảm giác 'phải cố gắng để được chú ý' là cảm giác quen thuộc — tức là cảm giác an toàn theo nghĩa não bộ. Khi bạn gặp một người cũng lạnh lùng và xa cách, não nhận ra: 'À, mình biết chỗ này.' Và bạn cảm thấy hấp dẫn — dù không biết tại sao."
      },
      {
        type: "quote",
        content: "Sự hấp dẫn không phải lúc nào cũng là tín hiệu tốt. Đôi khi nó là tín hiệu quen thuộc — và quen thuộc không có nghĩa là lành mạnh."
      },
      {
        type: "heading",
        content: "Lý thuyết attachment và vòng lặp quan hệ"
      },
      {
        type: "paragraph",
        content: "Nhà tâm lý học John Bowlby và sau đó là Mary Ainsworth đã nghiên cứu cách trẻ em gắn bó với người chăm sóc. Họ phát hiện: kiểu gắn bó hình thành trong 2 năm đầu đời sẽ là khuôn mẫu cho mọi mối quan hệ về sau."
      },
      {
        type: "list",
        items: [
          "Gắn bó an toàn (secure): Người chăm sóc nhất quán và đáp ứng. Lớn lên, bạn thoải mái với gần gũi và tin tưởng trong quan hệ.",
          "Gắn bó lo lắng (anxious): Người chăm sóc không nhất quán — có lúc gần, có lúc xa. Lớn lên, bạn sợ bị bỏ rơi, cần liên tục được trấn an, dễ cảm thấy không đủ tốt.",
          "Gắn bó né tránh (avoidant): Người chăm sóc lạnh lùng hoặc vắng mặt cảm xúc. Lớn lên, bạn sợ gần gũi, đề cao sự độc lập, khó để người khác thật sự vào.",
          "Gắn bó hỗn loạn (disorganized): Người chăm sóc vừa là nguồn an toàn vừa là nguồn nguy hiểm. Lớn lên, quan hệ vừa hút vừa đẩy."
        ]
      },
      {
        type: "paragraph",
        content: "Kiểu gắn bó lo lắng thường hút về phía người né tránh — và ngược lại. Người lo lắng cần gần, người né tránh cần xa. Vòng xoáy này tạo ra sức hút rất mạnh — và rất đau."
      },
      {
        type: "heading",
        content: "Tại sao bạn không chọn người 'tốt' hơn?"
      },
      {
        type: "paragraph",
        content: "Bạn đã thử. Ai đó ổn định, tốt bụng, rõ ràng yêu bạn. Nhưng bạn cảm thấy... nhạt. Không có 'chemistry'. Không có sức hút."
      },
      {
        type: "paragraph",
        content: "Đó chính xác là vấn đề. Sự ổn định cảm thấy xa lạ. Não bộ không nhận ra mẫu cũ — nên không có cảm giác 'hấp dẫn'. Bạn nhầm sự bình yên với sự nhạt nhẽo."
      },
      {
        type: "paragraph",
        content: "Để ra khỏi vòng lặp này, bạn cần không chỉ 'chọn khác'. Bạn cần nhận diện mô thức gắn bó của mình — hiểu vì sao mình phản ứng như vậy trong quan hệ — và dần dần học lại cảm giác an toàn trong sự ổn định."
      },
      {
        type: "quote",
        content: "Người phù hợp với bạn không phải người tạo ra nhiều cảm xúc nhất. Mà là người giúp bạn cảm thấy an toàn khi là chính mình."
      },
      {
        type: "heading",
        content: "Bước đầu tiên"
      },
      {
        type: "paragraph",
        content: "Không phải tìm người khác. Mà là hiểu mình trước. Kiểu gắn bó của bạn là gì? Nỗi sợ sâu nhất trong quan hệ là gì? Mô thức nào đang vận hành mỗi khi bạn yêu?"
      },
      {
        type: "paragraph",
        content: "Câu trả lời không ở người tiếp theo bạn gặp. Nó ở trong bạn — đang chờ được nhìn thấy."
      }
    ]
  },
  {
    slug: "biet-minh-va-hieu-minh",
    tag: "Tự nhận thức",
    tagColor: "#7BAE7F",
    title: "Sự khác biệt giữa biết mình và thật sự hiểu mình",
    excerpt: "Hầu hết chúng ta đều biết một vài điều về bản thân. Nhưng biết và hiểu là hai điều rất khác nhau — và sự khác biệt đó quyết định mọi thứ.",
    readTime: "5 phút",
    publishDate: "Tháng 2, 2026",
    sections: [
      {
        type: "paragraph",
        content: "'Mình biết mình có vấn đề với sự kiểm soát.' 'Mình biết mình hay lo lắng quá mức.' 'Mình biết mình sợ bị bỏ rơi.'"
      },
      {
        type: "paragraph",
        content: "Biết. Chúng ta biết rất nhiều thứ về bản thân. Nhưng vẫn lặp lại. Vẫn phản ứng theo cách cũ. Vẫn mắc kẹt ở chỗ cũ."
      },
      {
        type: "paragraph",
        content: "Tại sao biết chưa đủ?"
      },
      {
        type: "heading",
        content: "Biết là nhận thức. Hiểu là trải nghiệm."
      },
      {
        type: "paragraph",
        content: "Bạn có thể đọc sách về bơi lội và biết rất nhiều lý thuyết về kỹ thuật. Nhưng xuống nước lần đầu, bạn vẫn chìm như ai chưa đọc gì."
      },
      {
        type: "paragraph",
        content: "Tự hiểu cũng vậy. Đọc và biết mình là 'người lo lắng kiểu gắn bó anxious' là kiến thức của vỏ não trước trán — phần lý trí. Nhưng trong một cuộc tranh luận với người yêu lúc 11 giờ đêm, phần não đó đã tắt. Phần não cảm xúc và phản xạ lên điều khiển — và nó không đọc sách."
      },
      {
        type: "quote",
        content: "Kiến thức về bản thân nằm trong đầu. Hiểu biết về bản thân nằm trong cơ thể — trong phản ứng tự động, trong cảm giác trước khi bạn kịp suy nghĩ."
      },
      {
        type: "heading",
        content: "Ba cấp độ của tự nhận thức"
      },
      {
        type: "list",
        items: [
          "Cấp 1 — Nhãn dán: 'Mình là người hướng nội.' 'Mình là Type 4.' 'Mình có attachment style lo lắng.' Đây là bước đầu — có giá trị, nhưng chưa đủ. Nhãn dán không thay đổi hành vi.",
          "Cấp 2 — Nhận ra mô thức: Bạn bắt đầu nhìn thấy khi nào mô thức kích hoạt. 'À, mình đang phản ứng kiểu này vì mình sợ bị bỏ rơi.' Nhận ra trong lúc nó đang xảy ra — không phải sau đó. Đây là bước thay đổi bắt đầu.",
          "Cấp 3 — Hiểu nguồn gốc: Mô thức này đến từ đâu? Nó đang bảo vệ điều gì? Nó đã giúp bạn như thế nào trong quá khứ? Khi bạn hiểu được điều này — không phải bằng lý trí mà bằng cảm xúc thật — mô thức bắt đầu lỏng ra."
        ]
      },
      {
        type: "heading",
        content: "Tại sao nhiều người mắc kẹt ở Cấp 1?"
      },
      {
        type: "paragraph",
        content: "Vì Cấp 1 an toàn hơn. Gọi tên vấn đề mà không cần cảm nó. Phân tích mà không cần đối mặt. Biết mà không cần thay đổi."
      },
      {
        type: "paragraph",
        content: "Cấp 2 và 3 đòi hỏi bạn ở lại với sự khó chịu. Nhìn thẳng vào nỗi sợ thay vì giải thích nó. Cảm nhận cảm xúc thay vì phân tích nó."
      },
      {
        type: "paragraph",
        content: "Đây là lý do tại sao tự học từ sách không bao giờ đủ với những vấn đề sâu. Không phải vì sách sai. Mà vì tự hiểu cần một người khác — người giữ không gian để bạn an toàn đủ để nhìn thật."
      },
      {
        type: "quote",
        content: "Hiểu mình không phải hành trình tư duy. Đó là hành trình cảm xúc — dũng cảm ở lại với những phần của mình mà bạn từng học cách bỏ qua."
      },
      {
        type: "heading",
        content: "Bắt đầu từ đâu?"
      },
      {
        type: "paragraph",
        content: "Không bắt đầu từ đầu — bắt đầu từ cơ thể. Lần tới khi bạn phản ứng mạnh với điều gì đó: dừng lại. Đặt tay lên ngực. Hỏi: 'Cảm giác này ở đâu trong cơ thể mình? Nó trông như thế nào nếu có hình dáng?'"
      },
      {
        type: "paragraph",
        content: "Câu trả lời không cần logic. Cần thật."
      }
    ]
  },
  {
    slug: "enneagram-type-2-cho-di-de-duoc-yeu",
    tag: "Mô thức",
    tagColor: "#7C6FF7",
    title: "Người Enneagram Type 2: Khi cho đi trở thành cách để được yêu",
    excerpt: "Type 2 không chỉ là 'người hay giúp đỡ'. Đằng sau sự hào phóng đó là một câu hỏi sâu hơn: Tôi có được yêu thương không nếu không cho đi?",
    readTime: "9 phút",
    publishDate: "Tháng 3, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn luôn là người đầu tiên hỏi 'Mình có thể giúp gì cho bạn không?' Bạn nhớ sinh nhật mọi người. Bạn lắng nghe hàng giờ. Bạn cho đi mà không cần được hỏi."
      },
      {
        type: "paragraph",
        content: "Mọi người nói bạn tốt bụng. Bạn cũng nghĩ vậy."
      },
      {
        type: "paragraph",
        content: "Nhưng có một đêm nào đó, khi không ai hỏi thăm bạn — dù bạn vừa trải qua ngày tệ nhất — bạn cảm thấy thứ gì đó bên trong. Không phải tức giận. Không hẳn là buồn. Là thứ gì đó giống như... trống rỗng."
      },
      {
        type: "heading",
        content: "Type 2 thật sự là ai?"
      },
      {
        type: "paragraph",
        content: "Trong hệ thống Enneagram, Type 2 được gọi là 'The Helper' — Người Giúp Đỡ. Nhưng cái tên đó quá đơn giản và đôi khi gây hiểu lầm."
      },
      {
        type: "paragraph",
        content: "Type 2 không giúp đỡ vì họ 'tốt bụng'. Ít nhất không phải hoàn toàn vì vậy. Ở tầng sâu hơn, Type 2 giúp đỡ vì họ tin — dù không nói ra — rằng: mình chỉ có giá trị khi có ích cho người khác."
      },
      {
        type: "quote",
        content: "Nỗi sợ cốt lõi của Type 2: 'Nếu mình không cho đi, không ai cần mình. Và nếu không ai cần, mình không được yêu.'"
      },
      {
        type: "heading",
        content: "Sự hào phóng ẩn chứa điều gì?"
      },
      {
        type: "paragraph",
        content: "Đây không phải phán xét — đây là cơ chế. Type 2 học rất sớm (thường từ thời thơ ấu) rằng tình yêu là thứ phải kiếm được. Rằng họ được chấp nhận khi họ hữu ích. Khi họ không làm gì — họ lo lắng rằng họ trở nên vô hình."
      },
      {
        type: "paragraph",
        content: "Kết quả: Type 2 trở nên cực kỳ nhạy cảm với nhu cầu của người khác. Họ đọc được phòng rất nhanh. Họ biết ai đang cần gì trước khi người đó nói. Đây là món quà thật sự — nhưng nó đi kèm chi phí."
      },
      {
        type: "list",
        items: [
          "Khó nói 'không' — vì từ chối = từ chối mối quan hệ trong tâm trí Type 2",
          "Khó nhận giúp đỡ — nhận mà không cho lại cảm thấy mất cân bằng, thậm chí đáng xấu hổ",
          "Tích lũy oán giận — Type 2 cho đi cho đến khi cạn kiệt, rồi cảm thấy bị lợi dụng — dù người khác không biết họ đang mệt",
          "Mất kết nối với nhu cầu bản thân — Hỏi Type 2 'Bạn muốn gì?', họ thường không biết. Họ quen nhìn ra ngoài hơn là nhìn vào trong."
        ]
      },
      {
        type: "heading",
        content: "Điều Type 2 thật sự cần nghe"
      },
      {
        type: "paragraph",
        content: "Bạn không cần làm gì để được yêu. Bạn không cần hữu ích. Bạn không cần hoàn hảo hay không làm phiền ai."
      },
      {
        type: "paragraph",
        content: "Bạn có thể là gánh nặng đôi khi — và vẫn được yêu. Bạn có thể nói không — và vẫn được trân trọng. Bạn có thể cần — không chỉ cho đi."
      },
      {
        type: "paragraph",
        content: "Điều này nghe có vẻ đơn giản. Nhưng với Type 2, đây là một trong những bài học khó nhất."
      },
      {
        type: "heading",
        content: "Con đường chuyển hóa của Type 2"
      },
      {
        type: "paragraph",
        content: "Không phải ngừng giúp đỡ. Giúp đỡ là món quà thật sự của Type 2 — thế giới cần điều đó."
      },
      {
        type: "paragraph",
        content: "Mà là học cách giúp đỡ từ sự dư dả thay vì từ nỗi sợ. Học cách nhận — không chỉ cho. Học cách hỏi: 'Mình cần gì hôm nay?' — và để câu trả lời quan trọng bằng câu hỏi đó với người khác."
      },
      {
        type: "quote",
        content: "Type 2 ở trạng thái lành mạnh nhất không cho ít hơn — họ cho từ chỗ đầy đủ, không phải từ chỗ thiếu thốn. Và họ cũng biết nhận."
      },
      {
        type: "paragraph",
        content: "Bạn có nhận ra mình trong những điều này không? Không chỉ với Type 2 — nhiều người có mô thức 'cho đi để được yêu' dù không phải Type 2 thuần túy."
      }
    ]
  },
  {
    slug: "vong-lap-thoi-quen",
    tag: "Hành vi",
    tagColor: "#18B5B0",
    title: "Vòng lặp thói quen và cách phá vỡ nó từ bên trong",
    excerpt: "Thói quen không phải điểm yếu của ý chí. Chúng là thuật toán mà não bộ viết ra để tiết kiệm năng lượng. Và bạn có thể viết lại thuật toán đó.",
    readTime: "7 phút",
    publishDate: "Tháng 3, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn biết mình không nên làm điều đó. Bạn đã quyết tâm hàng chục lần. Rồi đến đúng khoảnh khắc quen thuộc — bạn làm lại. Tự động. Như không có lựa chọn nào khác."
      },
      {
        type: "paragraph",
        content: "Đó không phải yếu đuối. Đó là thần kinh học đang hoạt động đúng như thiết kế."
      },
      {
        type: "heading",
        content: "Não bộ yêu thích thói quen"
      },
      {
        type: "paragraph",
        content: "Não người tiêu thụ khoảng 20% năng lượng cơ thể — dù chỉ chiếm 2% trọng lượng. Đây là chi phí khổng lồ về mặt sinh học. Nên não bộ liên tục tìm cách tiết kiệm năng lượng."
      },
      {
        type: "paragraph",
        content: "Cách hiệu quả nhất: tự động hóa hành vi lặp lại. Khi bạn lái xe đi làm cùng tuyến đường mỗi ngày, sau vài tuần bạn có thể đến nơi mà gần như không nhớ hành trình. Não đã chạy 'chương trình thói quen' — tiết kiệm vỏ não trước trán cho việc khác."
      },
      {
        type: "quote",
        content: "Thói quen là não bộ đang giúp bạn — không phải phản bội bạn. Vấn đề là nó không phân biệt được thói quen tốt và xấu. Nó chỉ thấy: 'Cái này được lặp lại đủ nhiều, hãy tự động hóa nó.'"
      },
      {
        type: "heading",
        content: "Vòng lặp thói quen hoạt động thế nào"
      },
      {
        type: "paragraph",
        content: "Charles Duhigg trong cuốn 'The Power of Habit' mô tả cấu trúc cơ bản của mọi thói quen:"
      },
      {
        type: "list",
        items: [
          "Cue (tín hiệu): Thứ kích hoạt hành vi — có thể là địa điểm, thời gian, cảm xúc, người, hoặc hành động trước đó",
          "Routine (thói quen): Hành vi tự động diễn ra sau tín hiệu",
          "Reward (phần thưởng): Thứ não bộ nhận được — cảm giác tốt, giảm căng thẳng, thoát khỏi khó chịu"
        ]
      },
      {
        type: "paragraph",
        content: "Ví dụ: Cảm thấy lo lắng (cue) → Mở điện thoại scroll (routine) → Tạm thời không còn nghĩ đến lo lắng (reward). Não học: 'Lo lắng + điện thoại = tốt.' Vòng lặp hình thành."
      },
      {
        type: "heading",
        content: "Tại sao bỏ thói quen bằng ý chí không hiệu quả"
      },
      {
        type: "paragraph",
        content: "Nghiên cứu cho thấy: não không thực sự xóa vòng lặp thói quen. Nó chỉ có thể bị ghi đè bởi vòng lặp mới mạnh hơn."
      },
      {
        type: "paragraph",
        content: "'Đừng ăn đường' → não vẫn nhận cue, vẫn thèm reward. Áp lực tăng lên cho đến khi ý chí vỡ. 'Khi thèm ngọt, ăn trái cây' → thay routine mới vào cùng cue, cùng reward."
      },
      {
        type: "paragraph",
        content: "Công thức: Giữ nguyên cue + thay routine + giữ nguyên reward (hoặc tốt hơn)."
      },
      {
        type: "heading",
        content: "Nhưng đây là phần mà kỹ thuật không giải quyết được"
      },
      {
        type: "paragraph",
        content: "Một số thói quen không chỉ là thói quen. Chúng là cơ chế đối phó — cách mô thức nội tâm xử lý cảm xúc mà nó không biết cách tiêu hóa khác."
      },
      {
        type: "paragraph",
        content: "Người mang mô thức 'không đủ tốt' ăn uống vô độ không phải vì đói — mà vì ăn là cách duy nhất họ biết để tự an ủi sau một ngày cảm thấy thất bại. Người liên tục làm việc quá sức không phải vì yêu công việc — mà vì dừng lại đồng nghĩa với việc phải đối mặt với nỗi trống rỗng bên trong."
      },
      {
        type: "paragraph",
        content: "Những thói quen này không thể phá vỡ chỉ bằng cách thay routine. Chúng cần bạn nhìn vào cue thật sự — không phải trigger bên ngoài, mà là cảm xúc bên trong đang cần được đáp ứng."
      },
      {
        type: "quote",
        content: "Thói quen bề mặt thay đổi được bằng kỹ thuật. Nhưng thói quen ăn sâu vào mô thức — những cái theo bạn qua nhiều năm, nhiều lần cố gắng — chúng cần được hiểu trước khi có thể thay đổi."
      },
      {
        type: "heading",
        content: "Bắt đầu bằng câu hỏi khác"
      },
      {
        type: "paragraph",
        content: "Thay vì hỏi 'Làm sao mình bỏ thói quen này?', hãy hỏi: 'Thói quen này đang cho mình cái gì? Mình đang cố thoát khỏi cảm giác gì khi làm điều này?'"
      },
      {
        type: "paragraph",
        content: "Câu trả lời thật — không phải câu trả lời đúng — đó là nơi thay đổi thật sự bắt đầu."
      }
    ]
  }
,
  // ─── CHUỖI: KHOA HỌC THẦN KINH ───────────────────────────────────────────
  {
    slug: "he-than-kinh-dang-bao-ve-ban",
    tag: "Khoa học thần kinh",
    tagColor: "#18B5B0",
    title: "Hệ thần kinh của bạn không hỏng — nó chỉ đang bảo vệ bạn",
    excerpt: "Bạn hay lo lắng quá mức, hay tê liệt khi căng thẳng, hay bùng nổ mà không kiểm soát được? Đó không phải tính cách. Đó là hệ thần kinh đang làm đúng nhiệm vụ của nó — chỉ là trong hoàn cảnh không còn cần thiết.",
    readTime: "7 phút",
    publishDate: "Tháng 4, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Có người nói với tôi: 'Tôi biết mình lo lắng vô lý. Tôi biết không có gì nguy hiểm. Nhưng cơ thể tôi không nghe.' Và họ thấy mình có vấn đề. Thấy mình yếu đuối."
      },
      {
        type: "paragraph",
        content: "Nhưng thật ra — cơ thể họ đang làm đúng. Chỉ là đúng với một mối đe dọa từ 20 năm trước."
      },
      {
        type: "heading",
        content: "Hệ thần kinh tự chủ là gì?"
      },
      {
        type: "paragraph",
        content: "Hệ thần kinh tự chủ (autonomic nervous system) điều khiển những thứ bạn không tự ý kiểm soát: nhịp tim, hơi thở, tiêu hóa, phản xạ stress. Nó có hai nhánh chính:"
      },
      {
        type: "list",
        items: [
          "Hệ giao cảm (sympathetic): Chế độ chiến đấu hoặc bỏ chạy — tim đập nhanh, cơ bắp căng, adrenaline tăng. Cơ thể chuẩn bị cho nguy hiểm.",
          "Hệ phó giao cảm (parasympathetic): Chế độ nghỉ ngơi và tiêu hóa — nhịp tim chậm, cơ thể thư giãn, hệ miễn dịch hoạt động. Cơ thể phục hồi và kết nối."
        ]
      },
      {
        type: "paragraph",
        content: "Nhà nghiên cứu Stephen Porges đã phát triển Lý thuyết Polyvagal — cho thấy thực ra có ba trạng thái, không phải hai. Ngoài giao cảm và phó giao cảm, còn có trạng thái đóng băng — khi mối đe dọa quá lớn, cơ thể tắt nguồn để tồn tại."
      },
      {
        type: "heading",
        content: "Ba trạng thái thần kinh và bạn nhận ra mình ở đâu"
      },
      {
        type: "list",
        items: [
          "An toàn (Safe): Bạn thoải mái kết nối. Giọng nói ấm áp, ánh mắt mềm, cơ thể thư giãn. Suy nghĩ rõ ràng. Có thể chơi đùa, sáng tạo, thân mật.",
          "Chiến đấu hoặc Bỏ chạy (Fight/Flight): Tim đập nhanh, hơi thở nông, cơ bắp căng. Bạn nóng giận, lo lắng, phòng thủ hoặc muốn thoát khỏi tình huống. Khó nghĩ rõ ràng.",
          "Đóng băng (Freeze/Shutdown): Tê liệt, tách khỏi cảm xúc, không thể phản ứng. Cảm giác trống rỗng, vô nghĩa. Nhiều người nhầm đây là lười biếng hoặc trầm cảm."
        ]
      },
      {
        type: "quote",
        content: "Hệ thần kinh không phân biệt được nguy hiểm thật và nguy hiểm tưởng tượng. Nó chỉ phản ứng với tín hiệu — và tín hiệu đó có thể đến từ ký ức, từ mùi, từ giọng nói của ai đó nghe giống người từng làm bạn đau."
      },
      {
        type: "heading",
        content: "Tại sao hệ thần kinh bị kẹt?"
      },
      {
        type: "paragraph",
        content: "Khi bạn trải qua stress hoặc sang chấn — đặc biệt trong thời thơ ấu — hệ thần kinh học cách phản ứng với những tín hiệu nhất định. Nếu lớn lên trong môi trường không ổn định, hệ giao cảm của bạn được luyện tập để luôn cảnh giác."
      },
      {
        type: "paragraph",
        content: "Vấn đề là: khi lớn lên, môi trường thay đổi — nhưng hệ thần kinh vẫn chạy theo chương trình cũ. Bạn phản ứng với sếp như với cha. Bạn cảnh giác trong mối quan hệ lành mạnh như thể đang ở trong mối quan hệ độc hại. Bạn tê liệt với deadline như thể đang đối mặt với nguy hiểm thật."
      },
      {
        type: "heading",
        content: "Điều chỉnh hệ thần kinh — không phải bằng ý chí"
      },
      {
        type: "paragraph",
        content: "Bạn không thể nói với hệ thần kinh bình tĩnh lại và nó nghe. Nhưng có những cách tác động trực tiếp lên hệ phó giao cảm:"
      },
      {
        type: "list",
        items: [
          "Thở chậm, thở ra dài hơn thở vào: Thở ra dài kích hoạt dây thần kinh phế vị — nhánh chính của hệ phó giao cảm. 4 giây hít vào, 8 giây thở ra.",
          "Chuyển động nhẹ và có nhịp: Đi bộ, lắc lư nhẹ, vỗ nhẹ — giúp hệ thần kinh thoát khỏi trạng thái đóng băng.",
          "Kết nối xã hội an toàn: Giọng nói ấm áp, ánh mắt nhẹ nhàng của người khác là tín hiệu an toàn mạnh nhất với hệ thần kinh của chúng ta.",
          "Nhận diện trạng thái: Chỉ cần nhận ra mình đang ở trạng thái chiến đấu hoặc bỏ chạy đã giúp vỏ não trước trán tham gia — làm giảm phản ứng tự động."
        ]
      },
      {
        type: "quote",
        content: "Thay đổi không bắt đầu từ suy nghĩ tốt hơn. Nó bắt đầu từ cơ thể cảm thấy đủ an toàn để thay đổi."
      }
    ]
  },
  {
    slug: "sang-chan-tam-ly-khong-chi-o-trong-ky-uc",
    tag: "Khoa học thần kinh",
    tagColor: "#18B5B0",
    title: "Sang chấn tâm lý không chỉ nằm trong ký ức — nó nằm trong cơ thể",
    excerpt: "Nhiều người đã hiểu và tha thứ cho quá khứ về mặt lý trí. Nhưng cơ thể vẫn phản ứng như thể nó chưa qua. Đây không phải mâu thuẫn — đây là cách sang chấn thật sự hoạt động.",
    readTime: "8 phút",
    publishDate: "Tháng 4, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Mình đã hiểu rồi. Mình biết ba không có ý xấu. Mình tha thứ cho ông ấy rồi. Nhưng mỗi khi ai đó nói giọng to một chút — cơ thể vẫn co lại. Tim vẫn đập nhanh. Miệng vẫn khô."
      },
      {
        type: "paragraph",
        content: "Điều này không có nghĩa là bạn chưa tha thứ thật sự. Nó có nghĩa là sang chấn không chỉ là ký ức — nó là phản xạ thần kinh được lưu trong cơ thể."
      },
      {
        type: "heading",
        content: "The Body Keeps the Score"
      },
      {
        type: "paragraph",
        content: "Bác sĩ tâm thần Bessel van der Kolk sau 30 năm nghiên cứu về sang chấn đã viết cuốn sách có tiêu đề chính xác như vậy: The Body Keeps the Score — Cơ thể giữ điểm số."
      },
      {
        type: "paragraph",
        content: "Phát hiện cốt lõi của ông: Sang chấn không được lưu trữ như một câu chuyện trong vỏ não. Nó được lưu trữ như một phản xạ — trong hạch hạnh nhân (amygdala), trong hệ thần kinh, trong cơ bắp và mô cơ thể."
      },
      {
        type: "quote",
        content: "Ký ức sang chấn không giống như ký ức thông thường — có thể nhớ lại và kể lại. Nó bùng phát như thể đang xảy ra ngay bây giờ — với đầy đủ cảm xúc và cảm giác cơ thể của lần đầu tiên."
      },
      {
        type: "heading",
        content: "Tại sao nói chuyện không đủ"
      },
      {
        type: "paragraph",
        content: "Liệu pháp trò chuyện truyền thống (talk therapy) giúp bạn hiểu câu chuyện của mình. Đây là bước quan trọng. Nhưng vỏ não trước trán — phần não xử lý ngôn ngữ và lý trí — khi bị kích hoạt sang chấn, nó gần như bị tắt bởi hạch hạnh nhân."
      },
      {
        type: "paragraph",
        content: "Đó là lý do tại sao bạn có thể giải thích về sang chấn của mình một cách rõ ràng trong phòng trị liệu — và vẫn bị cuốn vào phản ứng cũ khi ra ngoài gặp trigger."
      },
      {
        type: "list",
        items: [
          "Ngôn ngữ xử lý ở vỏ não (cortex) — phần tiến hóa mới nhất của não.",
          "Sang chấn được lưu ở hạch hạnh nhân và thân não — phần cổ nhất và sâu nhất.",
          "Khi bị trigger, luồng thông tin chạy từ dưới lên trên — hạch hạnh nhân kích hoạt trước khi vỏ não kịp xử lý."
        ]
      },
      {
        type: "heading",
        content: "Cơ thể mang dấu vết sang chấn thế nào?"
      },
      {
        type: "paragraph",
        content: "Sang chấn được lưu trong cơ thể dưới nhiều dạng:"
      },
      {
        type: "list",
        items: [
          "Căng cơ mãn tính: Vai gồng, hàm nghiến, cổ cứng — cơ thể đang giữ tư thế phòng thủ từ ngày cũ.",
          "Phản ứng giật mình thái quá: Bộ não đang ở chế độ cảnh giác cao, tiêu tốn nhiều tài nguyên.",
          "Tách khỏi cơ thể (dissociation): Không cảm nhận được cơ thể, như đang nhìn bản thân từ bên ngoài — đây là cơ chế bảo vệ khi đau quá mức để xử lý.",
          "Vấn đề tiêu hóa, miễn dịch, giấc ngủ: Hệ thần kinh tự chủ điều khiển tất cả những hệ thống này."
        ]
      },
      {
        type: "heading",
        content: "Cách tiếp cận cơ thể trong chữa lành"
      },
      {
        type: "paragraph",
        content: "Chữa lành sang chấn hiệu quả cần làm việc với cơ thể — không chỉ với tâm trí. Một số hướng tiếp cận được nghiên cứu:"
      },
      {
        type: "list",
        items: [
          "Somatic Experiencing (Peter Levine): Học cách hoàn thành phản xạ sinh tồn bị gián đoạn — giúp hệ thần kinh thoát khỏi trạng thái bị kẹt.",
          "EMDR: Xử lý lại ký ức sang chấn qua chuyển động mắt — giúp não tiêu hóa những gì chưa được tiêu hóa.",
          "Yoga trị liệu sang chấn: Tái kết nối với cơ thể một cách an toàn.",
          "Nhận diện và đặt tên cảm giác cơ thể: Điều đơn giản nhưng mạnh mẽ — Mình đang thấy thắt ở ngực. Mình đang thấy nặng ở vai."
        ]
      },
      {
        type: "quote",
        content: "Bạn không thể suy nghĩ thoát khỏi sang chấn. Nhưng bạn có thể cảm nhận theo cách mới — và dần dần, cơ thể học được rằng hiện tại an toàn hơn quá khứ."
      }
    ]
  },
  {
    slug: "neuroplasticity-nao-bo-co-the-thay-doi",
    tag: "Khoa học thần kinh",
    tagColor: "#18B5B0",
    title: "Neuroplasticity: Não bộ có thể thay đổi — nhưng không theo cách bạn nghĩ",
    excerpt: "Chúng ta nghe nhiều về não bộ có thể thay đổi. Nhưng ít ai nói rõ: thay đổi như thế nào, mất bao lâu, và tại sao biết điều này vẫn không giúp bạn thay đổi nhanh hơn.",
    readTime: "6 phút",
    publishDate: "Tháng 4, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Neuroplasticity — tính dẻo của thần kinh — là một trong những phát hiện quan trọng nhất của khoa học thần kinh thế kỷ 20. Não bộ không cố định sau tuổi dậy thì. Nó tiếp tục thay đổi suốt cuộc đời."
      },
      {
        type: "paragraph",
        content: "Nghe có vẻ tuyệt vời. Và đúng là vậy. Nhưng cũng thường bị hiểu sai theo cách khiến người ta thất vọng."
      },
      {
        type: "heading",
        content: "Neuroplasticity thật sự là gì?"
      },
      {
        type: "paragraph",
        content: "Não bộ gồm khoảng 86 tỷ tế bào thần kinh (neuron). Chúng kết nối với nhau qua synapse. Mỗi lần bạn nghĩ, cảm xúc, hành động — một chuỗi tế bào nào đó bắn tín hiệu với nhau."
      },
      {
        type: "paragraph",
        content: "Nguyên tắc cơ bản: Neurons that fire together, wire together — Tế bào thần kinh bắn cùng nhau thì kết nối với nhau. Điều bạn lặp lại nhiều lần sẽ tạo ra đường dẫn thần kinh ngày càng mạnh hơn — như con đường mòn trong rừng."
      },
      {
        type: "quote",
        content: "Não bộ không thay đổi vì bạn muốn nó thay đổi. Nó thay đổi theo những gì bạn lặp lại đủ nhiều lần, đủ lâu, với đủ cảm xúc."
      },
      {
        type: "heading",
        content: "Ba điều người ta thường hiểu sai"
      },
      {
        type: "list",
        items: [
          "Sai: Nghe podcast về tư duy tích cực là đang thay đổi não. Đúng: Nghe thụ động tạo ra kết nối yếu. Thay đổi não cần thực hành chủ động, lặp lại, trong bối cảnh cảm xúc thật.",
          "Sai: Não bộ thay đổi nhanh. Đúng: Tạo đường mòn mới mất từ 66 ngày đến nhiều tháng hoặc năm, tùy độ sâu của mô thức cũ. Đường mòn cũ không biến mất — nó chỉ được dùng ít hơn khi đường mới mạnh hơn.",
          "Sai: Hiểu về neuroplasticity giúp bạn thay đổi nhanh hơn. Đúng: Hiểu là điểm khởi đầu. Nhưng não không thay đổi qua hiểu — nó thay đổi qua trải nghiệm lặp lại."
        ]
      },
      {
        type: "heading",
        content: "Điều gì thực sự kích hoạt thay đổi não?"
      },
      {
        type: "list",
        items: [
          "Cảm xúc mạnh: Trải nghiệm có cảm xúc tạo ra kết nối thần kinh mạnh hơn nhiều so với thông tin thuần túy. Đây là lý do ký ức cảm xúc bền vững hơn ký ức học thuật.",
          "Sự tập trung chú ý: Khi bạn chú ý đến điều gì đó, não giải phóng acetylcholine — giúp tăng cường tạo kết nối mới ở vùng đó.",
          "Giấc ngủ: Trong giấc ngủ, não củng cố những kết nối mới được hình thành trong ngày. Thiếu ngủ làm giảm neuroplasticity đáng kể.",
          "Lặp lại trong bối cảnh mới: Thực hành hành vi mới trong nhiều tình huống khác nhau giúp não tổng quát hóa — không chỉ có thể làm trong điều kiện lý tưởng."
        ]
      },
      {
        type: "heading",
        content: "Tại sao mô thức cũ dai dẳng?"
      },
      {
        type: "paragraph",
        content: "Đường dẫn thần kinh cũ không biến mất khi bạn tạo đường mới. Nó chỉ ít được sử dụng hơn. Và khi bạn căng thẳng, mệt mỏi, hoặc thiếu ngủ — não có xu hướng quay về đường mòn quen thuộc hơn."
      },
      {
        type: "paragraph",
        content: "Đây là lý do bạn có thể thực hành tốt trong điều kiện bình thường — nhưng khi áp lực, bạn lại phản ứng theo cách cũ. Não đang tiết kiệm năng lượng bằng cách dùng đường có sẵn."
      },
      {
        type: "quote",
        content: "Thay đổi não không phải xóa cái cũ. Là xây đường mới đủ mạnh để nó trở thành lựa chọn mặc định — kể cả khi bạn đang căng thẳng."
      },
      {
        type: "paragraph",
        content: "Điều này giải thích tại sao chuyển hóa thật sự cần thời gian, cần lặp lại, và cần làm việc ở cả cấp độ tâm lý lẫn thần kinh — không chỉ ở cấp độ nhận thức."
      }
    ]
  },

  // ─── CHUỖI: CÁC KIỂU GẮN BÓ ───────────────────────────────────────────────
  {
    slug: "4-kieu-gan-bo-va-cach-chung-dinh-hinh-moi-quan-he",
    tag: "Gắn bó",
    tagColor: "#E8A87C",
    title: "4 kiểu gắn bó và cách chúng định hình mọi mối quan hệ của bạn",
    excerpt: "Cách bạn yêu, cách bạn tranh luận, cách bạn rời đi — tất cả đều bắt nguồn từ kiểu gắn bó hình thành từ khi bạn còn là đứa trẻ chưa biết nói.",
    readTime: "9 phút",
    publishDate: "Tháng 5, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Hai người yêu nhau. Một người cần gần gũi liên tục — muốn biết đối phương đang nghĩ gì, đang ở đâu, có còn yêu không. Người kia cần không gian — cảm thấy ngạt thở khi bị hỏi quá nhiều, rút lui khi người kia tiến gần."
      },
      {
        type: "paragraph",
        content: "Cả hai đều yêu nhau. Cả hai đều đau. Và cả hai đều không hiểu tại sao lại cứ như vậy."
      },
      {
        type: "paragraph",
        content: "Câu trả lời nằm ở một nơi không ngờ — những năm đầu đời."
      },
      {
        type: "heading",
        content: "Lý thuyết gắn bó ra đời thế nào"
      },
      {
        type: "paragraph",
        content: "Vào những năm 1950-60, bác sĩ tâm thần người Anh John Bowlby nghiên cứu về trẻ em mồ côi và nhận thấy: trẻ không chỉ cần thức ăn và mái ấm để phát triển — chúng cần một mối quan hệ gắn bó an toàn với người chăm sóc."
      },
      {
        type: "paragraph",
        content: "Sau đó, nhà tâm lý học Mary Ainsworth thiết kế thí nghiệm Strange Situation — để trẻ nhỏ trong phòng với mẹ, rồi người lạ, rồi một mình. Qua phản ứng của trẻ khi mẹ quay lại, bà xác định được các kiểu gắn bó khác nhau."
      },
      {
        type: "heading",
        content: "4 kiểu gắn bó"
      },
      {
        type: "list",
        items: [
          "An toàn (Secure ~55% dân số): Người chăm sóc nhất quán, đáp ứng đúng mức. Trẻ biết mẹ sẽ về — có thể khám phá thế giới mà không quá lo lắng. Lớn lên: thoải mái với gần gũi và độc lập, có thể tin tưởng và cho phép được tin tưởng.",
          "Lo lắng (Anxious ~20%): Người chăm sóc không nhất quán — đôi khi đáp ứng, đôi khi không. Trẻ không biết khi nào mẹ sẽ về nên khi mẹ về thì bám chặt và khóc nhiều hơn. Lớn lên: sợ bị bỏ rơi, cần liên tục được trấn an, cảm xúc mạnh trong quan hệ.",
          "Né tránh (Avoidant ~25%): Người chăm sóc lạnh lùng, không đáp ứng cảm xúc. Trẻ học cách không cần — tắt nhu cầu gắn bó. Khi mẹ về, trẻ tỏ ra không quan tâm. Lớn lên: coi trọng độc lập, khó chịu với sự gần gũi, xu hướng cắt đứt khi quá thân mật.",
          "Hỗn loạn (Disorganized ~5%): Người chăm sóc vừa là nguồn an toàn vừa là nguồn nguy hiểm — thường liên quan đến sang chấn hoặc lạm dụng. Trẻ vừa muốn đến gần vừa sợ. Lớn lên: quan hệ hỗn loạn, vừa khao khát vừa phá hoại sự gần gũi, khó tin tưởng."
        ]
      },
      {
        type: "quote",
        content: "Kiểu gắn bó không phải bản án. Nhưng nó là bản đồ — giúp bạn hiểu tại sao bạn phản ứng như vậy khi yêu, và tại sao người kia phản ứng như vậy với bạn."
      },
      {
        type: "heading",
        content: "Kiểu gắn bó thay đổi được không?"
      },
      {
        type: "paragraph",
        content: "Có — nhưng cần thời gian và thường cần làm việc có ý thức. Một mối quan hệ an toàn (với người yêu, nhà trị liệu, hoặc cộng đồng) có thể dần dần tái lập trình kiểu gắn bó."
      },
      {
        type: "paragraph",
        content: "Điều quan trọng đầu tiên: nhận ra kiểu gắn bó của mình. Không phải để tự trách — mà để hiểu: À, mình phản ứng như vậy không phải vì mình có vấn đề. Mà vì mình đang chạy một chương trình rất cũ."
      },
      {
        type: "paragraph",
        content: "Câu hỏi tự hỏi: Trong quan hệ thân thiết, mình sợ điều gì hơn — bị bỏ rơi, hay bị nuốt chửng? Trả lời trung thực câu đó là bước đầu tiên."
      }
    ]
  },
  {
    slug: "gan-bo-lo-lang-khi-yeu-dong-nghia-voi-so-mat",
    tag: "Gắn bó",
    tagColor: "#E8A87C",
    title: "Người gắn bó lo lắng: Khi yêu đồng nghĩa với sợ mất",
    excerpt: "Bạn yêu rất nhiều — nhưng tình yêu đó đi kèm với lo lắng liên tục. Bạn cần trấn an. Bạn phân tích từng tin nhắn. Không phải vì bạn quá nhạy cảm. Mà vì hệ thần kinh của bạn đã học: gần gũi là không chắc chắn.",
    readTime: "8 phút",
    publishDate: "Tháng 5, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn gửi tin nhắn. Đợi. Đọc lại tin nhắn của mình xem có gì sai không. Đợi thêm. Bắt đầu nghĩ họ có tức mình không, có chuyện gì xảy ra không, mình có làm gì sai không. Rồi họ trả lời — và mọi thứ lại ổn. Cho đến lần sau."
      },
      {
        type: "paragraph",
        content: "Nếu điều này quen thuộc — bạn có thể đang vận hành với kiểu gắn bó lo lắng."
      },
      {
        type: "heading",
        content: "Kiểu gắn bó lo lắng hình thành thế nào?"
      },
      {
        type: "paragraph",
        content: "Người có gắn bó lo lắng thường có người chăm sóc không nhất quán trong thời thơ ấu — không phải lạnh lùng hay lạm dụng, mà không đáng tin cậy về mặt cảm xúc. Đôi khi ấm áp và gần gũi. Đôi khi bận, lo lắng, hay lo tâm trạng của chính họ."
      },
      {
        type: "paragraph",
        content: "Đứa trẻ không biết khi nào thì được đáp ứng — nên nó làm điều hợp lý nhất có thể: tăng cường tín hiệu. Khóc to hơn. Bám chặt hơn. Cảnh giác hơn với bất kỳ dấu hiệu nào người chăm sóc sắp rời đi."
      },
      {
        type: "quote",
        content: "Gắn bó lo lắng không phải tính cách yếu đuối. Đó là chiến lược sinh tồn của một đứa trẻ sống trong môi trường không thể đoán trước."
      },
      {
        type: "heading",
        content: "Dấu hiệu gắn bó lo lắng trong quan hệ trưởng thành"
      },
      {
        type: "list",
        items: [
          "Cần liên tục được trấn an: Anh/em có còn yêu không — không phải vì nghi ngờ, mà vì hệ thần kinh cần xác nhận để ổn định.",
          "Phân tích quá mức: Đọc lại tin nhắn nhiều lần. Phân tích giọng điệu. Tìm ý nghĩa ẩn trong những thứ bình thường.",
          "Sợ bị bỏ rơi: Phản ứng mạnh với việc đối phương cần không gian. Giải thích cần không gian là dấu hiệu của việc mất đi.",
          "Hy sinh bản thân để giữ quan hệ: Đồng ý với những thứ mình không muốn, tránh xung đột dù bất đồng — vì xung đột đồng nghĩa nguy cơ mất mối quan hệ.",
          "Cảm xúc leo thang nhanh: Nhỏ chuyện thành lớn chuyện trong đầu rất nhanh. Từ họ không trả lời đến họ không còn yêu mình trong vài giờ."
        ]
      },
      {
        type: "heading",
        content: "Điều người gắn bó lo lắng cần nhất"
      },
      {
        type: "paragraph",
        content: "Không phải người yêu hoàn hảo luôn luôn sẵn sàng. Mà là học cách tự điều chỉnh — tức là, khả năng ổn định cảm xúc từ bên trong thay vì phụ thuộc hoàn toàn vào người khác."
      },
      {
        type: "paragraph",
        content: "Điều này không có nghĩa là không cần người khác. Mà là có thể chịu đựng sự không chắc chắn ngắn hạn mà không rơi vào vòng xoáy lo lắng."
      },
      {
        type: "list",
        items: [
          "Nhận ra trigger: Mình đang lo lắng. Điều gì đang kích hoạt cảm giác này?",
          "Phân biệt quá khứ và hiện tại: Đây có thật sự là dấu hiệu nguy hiểm — hay mình đang phản ứng với ký ức cũ?",
          "Xây dựng nguồn an toàn bên trong: Bạn bè, sở thích, cơ thể — những thứ không phụ thuộc vào một mối quan hệ duy nhất.",
          "Làm việc với nhà trị liệu: Gắn bó lo lắng thay đổi nhanh hơn trong một mối quan hệ trị liệu an toàn và nhất quán."
        ]
      },
      {
        type: "quote",
        content: "Người gắn bó lo lắng không yêu quá nhiều. Họ yêu từ nơi thiếu an toàn. Và khi được an toàn — họ có thể yêu theo cách rất đẹp."
      }
    ]
  },
  {
    slug: "gan-bo-ne-tranh-khi-gan-gui-cam-thay-nguy-hiem",
    tag: "Gắn bó",
    tagColor: "#E8A87C",
    title: "Người gắn bó né tránh: Khi sự gần gũi cảm thấy nguy hiểm",
    excerpt: "Bạn muốn có mối quan hệ tốt — nhưng khi ai đó thật sự gần, bạn cảm thấy ngạt thở. Không phải vì bạn lạnh lùng. Mà vì một phần não bộ của bạn đã học: gần gũi đồng nghĩa mất tự do, mất bản thân.",
    readTime: "8 phút",
    publishDate: "Tháng 5, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn thích người đó. Thật sự thích. Nhưng khi họ bắt đầu muốn gặp nhiều hơn, muốn biết nhiều hơn, muốn gần hơn — bạn cảm thấy thứ gì đó bên trong muốn rút lui. Tìm lý do để bận. Cần không gian."
      },
      {
        type: "paragraph",
        content: "Và khi họ phàn nàn về điều đó, bạn cảm thấy bị bóp nghẹt. Bị kiểm soát. Dù họ chỉ đang yêu theo cách bình thường."
      },
      {
        type: "heading",
        content: "Nguồn gốc của gắn bó né tránh"
      },
      {
        type: "paragraph",
        content: "Trẻ em có kiểu gắn bó né tránh thường có người chăm sóc cảm xúc lạnh lùng, xa cách, hoặc không đáp ứng nhu cầu cảm xúc — dù có thể đáp ứng nhu cầu vật chất."
      },
      {
        type: "paragraph",
        content: "Khi đứa trẻ khóc và không được ôm, nó làm điều duy nhất có thể: tắt nhu cầu đó đi. Học cách tự đủ. Học cách không cần. Vì cần mà không được đáp ứng còn đau hơn không cần."
      },
      {
        type: "paragraph",
        content: "Đây không phải lạnh lùng — đây là thích nghi thông minh của não bộ trẻ em."
      },
      {
        type: "quote",
        content: "Người né tránh không thiếu cảm xúc. Họ có cảm xúc — chỉ là đã học cách không tin tưởng chúng, không hiển thị chúng, và không trông cậy vào người khác để xử lý chúng."
      },
      {
        type: "heading",
        content: "Dấu hiệu gắn bó né tránh"
      },
      {
        type: "list",
        items: [
          "Cần nhiều không gian một mình: Nạp năng lượng từ sự độc lập. Cảm thấy ngạt thở khi đối phương cần quá nhiều thời gian.",
          "Khó nói về cảm xúc: Không phải giấu — mà thật sự không quen tiếp cận cảm xúc bên trong. Câu em đang cảm thấy thế nào tạo ra lo lắng thật sự.",
          "Khi quan hệ trở nên thân mật, bắt đầu thấy lỗi: Não tìm lý do để tạo khoảng cách an toàn.",
          "Coi trọng độc lập hơn kết nối: Thành công, tự lập, không cần ai — những giá trị này không chỉ là ưu tiên, mà là danh tính.",
          "Sau chia tay phục hồi nhanh hơn người khác: Không phải vì không yêu — mà vì đã quen tắt nhu cầu kết nối."
        ]
      },
      {
        type: "heading",
        content: "Điều người gắn bó né tránh cần biết về bản thân"
      },
      {
        type: "paragraph",
        content: "Đằng sau sự độc lập đó thường là một nhu cầu gắn bó vẫn đang tồn tại — chỉ là bị chôn sâu. Nghiên cứu cho thấy người né tránh, khi được đo nhịp tim và phản ứng thần kinh trong tình huống thân mật, thực ra có mức stress cao — dù bề ngoài trông bình thản."
      },
      {
        type: "paragraph",
        content: "Họ không thiếu nhu cầu kết nối. Họ chỉ không tin là an toàn khi có nhu cầu đó."
      },
      {
        type: "list",
        items: [
          "Nhận ra khi nào bạn đang rút lui và tại sao: Đây là để thoát khỏi lo lắng — không phải vì bạn không muốn ở lại.",
          "Thực hành ở lại với sự khó chịu nhỏ: Chịu đựng sự gần gũi 10% nhiều hơn mức thoải mái — để não học lại rằng gần gũi không nguy hiểm.",
          "Cho người kia biết bạn cần không gian — thay vì biến mất: Sự khác biệt giữa mình cần 2 tiếng một mình và im lặng rút lui rất lớn với người lo lắng.",
          "Kiên nhẫn với quá trình: Não bộ né tránh mất nhiều thời gian để học lại vì nó đã được lập trình rất sớm và rất kỹ."
        ]
      },
      {
        type: "quote",
        content: "Người gắn bó né tránh không sợ tình yêu. Họ sợ những gì tình yêu đòi hỏi — sự phụ thuộc, sự dễ tổn thương, nguy cơ mất bản thân trong người khác. Và nỗi sợ đó rất thật."
      }
    ]
  },

  // ─── CHUỖI: RANH GIỚI GIỮA CÁC MÔ THỨC ──────────────────────────────────
  {
    slug: "type-4-hay-type-2-cach-phan-biet",
    tag: "Phân biệt mô thức",
    tagColor: "#9B7FD4",
    title: "Type 4 hay Type 2? Khi hai mô thức trông giống nhau nhưng vận hành hoàn toàn khác",
    excerpt: "Cả hai đều nhạy cảm, đều quan tâm người khác, đều sợ bị từ chối. Nhưng nguồn gốc và cơ chế của hai mô thức này hoàn toàn khác nhau — và nhầm lẫn giữa chúng sẽ dẫn đến con đường chuyển hóa sai.",
    readTime: "7 phút",
    publishDate: "Tháng 6, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Nhiều người đọc về Type 4 và Type 2 rồi thấy mình trong cả hai. Đều nhạy cảm. Đều quan tâm đến người khác. Đều có xu hướng đặt cảm xúc lên trên lý trí."
      },
      {
        type: "paragraph",
        content: "Nhưng hỏi kỹ hơn một chút — sẽ thấy chúng vận hành theo logic hoàn toàn khác nhau."
      },
      {
        type: "heading",
        content: "Type 4 — Người Độc Đáo"
      },
      {
        type: "paragraph",
        content: "Nỗi sợ cốt lõi của Type 4: Mình bình thường, không có gì đặc biệt, không có danh tính thật sự. Khao khát cốt lõi: Được biết đến và yêu thương vì sự độc đáo của mình — không phải dù mình khác biệt mà chính vì mình khác biệt."
      },
      {
        type: "paragraph",
        content: "Type 4 hướng vào trong. Họ quan tâm đến cảm xúc và trải nghiệm của chính mình trước tiên. Họ cảm thấy có gì đó thiếu — thứ người khác có mà họ không có — và điều này tạo ra cảm giác khao khát mãn tính."
      },
      {
        type: "heading",
        content: "Type 2 — Người Cho Đi"
      },
      {
        type: "paragraph",
        content: "Nỗi sợ cốt lõi của Type 2: Mình không được yêu nếu không hữu ích, không cần thiết, không cho đi. Khao khát cốt lõi: Được yêu vô điều kiện — nhưng không tin điều đó có thể xảy ra nếu không làm gì để xứng đáng."
      },
      {
        type: "paragraph",
        content: "Type 2 hướng ra ngoài. Họ rất nhạy với nhu cầu của người khác — đôi khi đến mức quên mất nhu cầu của chính mình. Họ tìm kiếm giá trị bản thân qua sự đánh giá cao của người khác."
      },
      {
        type: "heading",
        content: "Test phân biệt quan trọng nhất"
      },
      {
        type: "list",
        items: [
          "Khi một mình, bạn thường nghĩ về điều gì? Type 4: Về chính mình — cảm xúc, ý nghĩa, danh tính. Type 2: Về người khác — họ ổn không, họ cần gì, mình đã làm đủ chưa.",
          "Khi cảm thấy tệ, bạn muốn gì? Type 4: Được thấy và hiểu trong nỗi đau của mình. Type 2: Được cần — giúp ai đó để cảm thấy có giá trị trở lại.",
          "Điều gì gây ra cảm giác xấu hổ mạnh nhất? Type 4: Bị xem là bình thường, nhạt nhẽo, không có chiều sâu. Type 2: Bị xem là ích kỷ, không quan tâm, chỉ nghĩ cho mình.",
          "Với người lạ, bạn tự nhiên làm gì? Type 4: Quan sát, đánh giá, tự hỏi mình có hợp với họ không. Type 2: Tìm cách kết nối, hỏi về họ, tìm điều có thể giúp."
        ]
      },
      {
        type: "quote",
        content: "Type 4 tìm kiếm bản thân mình trong mối quan hệ. Type 2 tìm kiếm giá trị của mình trong mối quan hệ. Nghe giống nhau nhưng khác hoàn toàn."
      },
      {
        type: "heading",
        content: "Tại sao nhầm lẫn này quan trọng"
      },
      {
        type: "paragraph",
        content: "Con đường chuyển hóa của Type 4 là học cách tìm ý nghĩa trong hiện tại — thay vì luôn khao khát thứ không có. Trong khi Type 2 cần học cách nhận — không chỉ cho. Nếu Type 2 áp dụng hành trình của Type 4, họ sẽ càng rút vào trong và quên mất người khác hơn. Nếu Type 4 áp dụng hành trình của Type 2, họ sẽ càng cho đi nhiều hơn và mất kết nối với bản thân."
      }
    ]
  },
  {
    slug: "huong-noi-hay-ne-tranh-su-khac-biet",
    tag: "Phân biệt mô thức",
    tagColor: "#9B7FD4",
    title: "Hướng nội hay né tránh? Ranh giới mà nhiều người nhầm lẫn",
    excerpt: "Thích ở một mình, ngại đám đông, cần thời gian để nạp năng lượng — đây là hướng nội hay né tránh xã hội? Câu trả lời quyết định bạn cần gì để thật sự phát triển.",
    readTime: "6 phút",
    publishDate: "Tháng 6, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Mình chỉ là người hướng nội. Câu này được dùng rất nhiều — đôi khi đúng, đôi khi là cách không cần đối mặt với một điều khác."
      },
      {
        type: "paragraph",
        content: "Hướng nội là đặc điểm tính cách. Né tránh là cơ chế tự vệ. Chúng trông giống nhau từ bên ngoài — nhưng có nguồn gốc và hệ quả hoàn toàn khác."
      },
      {
        type: "heading",
        content: "Hướng nội thật sự là gì?"
      },
      {
        type: "paragraph",
        content: "Theo Carl Jung và nghiên cứu tâm lý học hiện đại, hướng nội là xu hướng nạp năng lượng từ bên trong — từ suy nghĩ, ý tưởng, trải nghiệm nội tâm — thay vì từ tương tác xã hội. Người hướng nội không ghét người khác. Họ chỉ bị tiêu hao bởi tương tác xã hội nhiều hơn người hướng ngoại — và cần thời gian một mình để phục hồi."
      },
      {
        type: "list",
        items: [
          "Người hướng nội thích cuộc trò chuyện sâu hơn small talk — không phải tránh tất cả.",
          "Người hướng nội có thể tận hưởng các buổi tụ họp — nhưng cần thời gian một mình sau đó.",
          "Người hướng nội chọn ít kết nối nhưng sâu — không phải zero kết nối.",
          "Sau khi ở một mình đủ, người hướng nội cảm thấy thoải mái và muốn kết nối trở lại."
        ]
      },
      {
        type: "heading",
        content: "Né tránh xã hội là gì?"
      },
      {
        type: "paragraph",
        content: "Né tránh xã hội là cơ chế phòng vệ — xuất phát từ lo lắng xã hội, sang chấn, hoặc kiểu gắn bó né tránh. Người né tránh không chỉ thích ở một mình — họ sợ những gì xảy ra khi kết nối: bị phán xét, bị từ chối, bị tổn thương, mất kiểm soát."
      },
      {
        type: "list",
        items: [
          "Né tránh: Muốn kết nối nhưng sợ. Ở một mình không phải để nạp năng lượng mà để tránh nguy cơ.",
          "Né tránh: Sau khi tránh né, cảm thấy vừa nhẹ nhõm vừa cô đơn và tiếc nuối.",
          "Né tránh: Tưởng tượng tình huống xã hội trước và lo lắng về nó.",
          "Né tránh: Cuộc sống thu hẹp dần theo thời gian — ít tương tác, ít rủi ro, ít sống hơn."
        ]
      },
      {
        type: "quote",
        content: "Người hướng nội ở nhà vì ở nhà tốt. Người né tránh ở nhà vì ra ngoài đáng sợ. Từ bên ngoài trông giống nhau — từ bên trong hoàn toàn khác."
      },
      {
        type: "heading",
        content: "Test tự kiểm tra"
      },
      {
        type: "paragraph",
        content: "Hỏi bản thân: Nếu mình chắc chắn 100% không ai phán xét, không ai làm mình khó chịu, không có hệ quả xấu — mình có muốn kết nối với người khác nhiều hơn không?"
      },
      {
        type: "paragraph",
        content: "Nếu có — bạn đang né tránh, không phải hướng nội. Nhu cầu kết nối vẫn ở đó — chỉ bị chặn bởi lo lắng."
      },
      {
        type: "paragraph",
        content: "Nếu không — bạn thật sự cần ít kết nối hơn để phát triển tốt. Đó là hướng nội thuần túy, không cần chữa."
      },
      {
        type: "heading",
        content: "Tại sao phân biệt này quan trọng?"
      },
      {
        type: "paragraph",
        content: "Người hướng nội cần thiết kế cuộc sống phù hợp với mình — ít tương tác hơn, sâu hơn. Người né tránh cần làm việc với nỗi sợ — dần dần mở rộng vùng an toàn, không phải ép buộc bản thân."
      },
      {
        type: "paragraph",
        content: "Nếu người né tránh được xác nhận là hướng nội — họ sẽ thu mình thêm và gọi đó là tự chăm sóc. Nếu người hướng nội bị gọi là né tránh — họ sẽ ép buộc bản thân ra ngoài và kiệt sức."
      }
    ]
  },
  {
    slug: "khi-ban-thay-minh-trong-nhieu-mo-thuc",
    tag: "Phân biệt mô thức",
    tagColor: "#9B7FD4",
    title: "Khi bạn thấy mình trong nhiều mô thức: Đây là điều đang xảy ra",
    excerpt: "Đọc về 9 mô thức và thấy mình trong 3-4 cái? Điều đó không có nghĩa là bạn không có type. Nó có nghĩa là bạn đang nhìn thấy những lớp khác nhau của cùng một mô thức cốt lõi.",
    readTime: "7 phút",
    publishDate: "Tháng 6, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Mình đọc Type 1 thấy đúng. Đọc Type 4 cũng đúng. Đọc Type 7 cũng thấy mình. Mình là type gì vậy?"
      },
      {
        type: "paragraph",
        content: "Đây là điều gần như mọi người trải qua khi lần đầu tiếp xúc với Enneagram hoặc bất kỳ hệ thống mô thức nào. Và cảm giác đó không phải vô nghĩa — nó đang nói với bạn điều gì đó quan trọng."
      },
      {
        type: "heading",
        content: "Tại sao bạn thấy mình trong nhiều mô thức?"
      },
      {
        type: "paragraph",
        content: "Ba lý do chính:"
      },
      {
        type: "list",
        items: [
          "Mô thức cánh (Wings): Trong Enneagram, mỗi type chịu ảnh hưởng từ hai type liền kề. Type 4 có cánh 3 hoặc cánh 5. Bạn có thể nhận ra đặc điểm của type kề bên vì chúng thật sự hiện diện trong bạn.",
          "Mô thức stress và an toàn: Khi căng thẳng, mỗi type di chuyển về phía một type khác và thể hiện những đặc điểm tiêu cực của type đó. Khi an toàn, bạn di chuyển về phía type khác nữa. Bạn có thể nhận ra mình ở cả ba nơi.",
          "Lớp mặt nạ và lớp cốt lõi: Bạn thường có một mô thức bề mặt — mô thức bạn học để tồn tại trong môi trường cụ thể — và một mô thức cốt lõi — nỗi sợ và khao khát sâu nhất. Chúng đôi khi trông khác nhau."
        ]
      },
      {
        type: "heading",
        content: "Cách tìm mô thức cốt lõi"
      },
      {
        type: "paragraph",
        content: "Đừng tìm qua hành vi bề mặt. Tìm qua nỗi sợ và động lực."
      },
      {
        type: "quote",
        content: "Mô thức không định nghĩa bạn qua những gì bạn làm. Nó định nghĩa bạn qua những gì bạn sợ nhất và muốn nhất — ở tầng sâu nhất, trước khi lý trí can thiệp."
      },
      {
        type: "list",
        items: [
          "Nỗi sợ nào khiến bạn phản ứng tự động nhất? Bị từ chối, bị kiểm soát, bị xem là thất bại, bị bỏ rơi?",
          "Điều gì bạn muốn nhất trong mọi mối quan hệ và tình huống? Được tự do, được yêu, được an toàn, được thấy?",
          "Bạn cảm thấy xấu hổ sâu nhất khi bị gọi là gì? Ích kỷ, yếu đuối, lập dị, nhạt nhẽo?"
        ]
      },
      {
        type: "heading",
        content: "Mô thức ở trạng thái stress"
      },
      {
        type: "paragraph",
        content: "Trong Enneagram, mỗi type có một mũi tên stress — type mà họ di chuyển đến khi căng thẳng và thể hiện những đặc điểm không lành mạnh của type đó."
      },
      {
        type: "list",
        items: [
          "Type 1 khi stress đi về Type 4: Bắt đầu u ám, cảm thấy bị hiểu lầm, rút vào cảm xúc.",
          "Type 2 khi stress đi về Type 8: Bùng nổ, kiểm soát, đòi được ghi nhận.",
          "Type 4 khi stress đi về Type 2: Bám víu người khác, mất bản sắc, cần được cần thiết.",
          "Type 7 khi stress đi về Type 1: Cứng nhắc, phê phán, mất khả năng vui."
        ]
      },
      {
        type: "paragraph",
        content: "Nếu bạn đang nhận ra mình ở nhiều type — hãy hỏi: Cái nào là mình lúc bình thường, cái nào là mình lúc stress? Câu trả lời sẽ giúp bạn phân biệt type cốt lõi và type stress."
      },
      {
        type: "heading",
        content: "Quan trọng hơn type"
      },
      {
        type: "paragraph",
        content: "Mục tiêu không phải tìm đúng nhãn. Mục tiêu là hiểu cơ chế — tại sao bạn phản ứng như vậy, điều gì đang thật sự vận hành bên dưới hành vi bề mặt."
      },
      {
        type: "paragraph",
        content: "Một người hiểu sâu về một type và áp dụng được vào cuộc sống thật của họ — có giá trị hơn nhiều so với người biết tên của tất cả 9 type nhưng không thay đổi gì."
      },
      {
        type: "quote",
        content: "Hệ thống mô thức không phải để phân loại người. Nó là công cụ để thấy rõ hơn — bản thân mình và người khác. Dùng nó như vậy, không phải như hộp dán nhãn."
      }
    ]
  }

,
  // ─── 7 BÀI MỚI — VIRAL INSIGHTS TOÀN CẦU ────────────────────────────────
  {
    slug: "biet-type-van-khong-thay-doi-duoc",
    tag: "Mô thức",
    tagColor: "#7C6FF7",
    title: "Tại sao biết mô thức của mình vẫn không giúp bạn thay đổi",
    excerpt: "Biết mình là Type 4, Type 2, hay bất kỳ type nào — cảm giác đó rất hay. Nhưng sau vài tuần, bạn vẫn phản ứng theo cách cũ. Đây không phải vì hệ thống sai. Mà vì có một khoảng cách rất lớn giữa hiểu và thay đổi mà ít ai nói đến.",
    readTime: "7 phút",
    publishDate: "Tháng 7, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn làm bài test. Đọc mô tả. Gật đầu liên tục — Đúng quá, đây là mình. Chia sẻ với bạn bè. Cảm thấy được nhìn thấy lần đầu tiên trong nhiều năm."
      },
      {
        type: "paragraph",
        content: "Rồi ba tuần sau — bạn lại phản ứng theo đúng mô thức cũ. Vẫn lo lắng như vậy. Vẫn cho đi như vậy. Vẫn rút lui như vậy."
      },
      {
        type: "paragraph",
        content: "Và bạn tự hỏi: Biết để làm gì?"
      },
      {
        type: "heading",
        content: "Insight không phải thay đổi"
      },
      {
        type: "paragraph",
        content: "Đây là điều các nhà tâm lý học gọi là insight-action gap — khoảng cách giữa hiểu biết và hành động. Nghiên cứu nhất quán cho thấy: hiểu vấn đề của mình không tự động dẫn đến thay đổi hành vi."
      },
      {
        type: "paragraph",
        content: "Thật ra, đôi khi hiểu còn làm bạn stuck hơn. Vì bạn bắt đầu giải thích thay vì thay đổi. Thay vì xử lý cảm xúc, bạn phân tích: Mình đang lo lắng vì mình là Type 6, cơ chế phòng thủ của mình là... Và rồi bạn ở lại trong đầu, không xuống cơ thể."
      },
      {
        type: "quote",
        content: "Tự nhận thức mà không có hành động chỉ tạo ra một câu chuyện tinh vi hơn về lý do tại sao bạn là như vậy — không phải sự thay đổi."
      },
      {
        type: "heading",
        content: "Ba lý do biết không đủ"
      },
      {
        type: "list",
        items: [
          "Mô thức được lưu trong cơ thể, không chỉ trong đầu: Khi bị trigger, phản ứng xảy ra trước khi bạn kịp nghĩ. Não cảm xúc (amygdala) bắn trước, não lý trí (prefrontal cortex) đến sau. Biết về mô thức không làm chậm được phản xạ thần kinh.",
          "Hiểu tạo ra sự thoải mái giả: Khi bạn có tên cho vấn đề — Tôi né tránh vì gắn bó né tránh — não cảm thấy đã xử lý xong. Cảm giác hiểu tạo ra dopamine nhỏ. Và bạn không còn động lực thật sự để làm việc khó hơn.",
          "Thay đổi cần lặp lại trong bối cảnh thật: Hiểu mô thức trong phòng yên tĩnh khác hoàn toàn với giữ bình tĩnh khi người yêu không trả lời tin nhắn lúc 11 giờ đêm. Thay đổi thật xảy ra trong bối cảnh có cảm xúc thật — không phải trong bài test trắc nghiệm."
        ]
      },
      {
        type: "heading",
        content: "Vậy biết để làm gì?"
      },
      {
        type: "paragraph",
        content: "Biết là điểm bắt đầu — không phải điểm kết thúc. Giá trị thật của việc hiểu mô thức không phải là nhãn dán. Là bản đồ để bạn nhận ra khi nào mình đang bị cuốn vào mô thức cũ — và có khoảng dừng nhỏ đủ để chọn khác đi."
      },
      {
        type: "paragraph",
        content: "Khoảng dừng đó — theo nhà tâm lý học Viktor Frankl — là nơi tự do nằm. Giữa kích thích và phản ứng, có một khoảng không gian. Và trong khoảng không gian đó là sức mạnh để chọn."
      },
      {
        type: "list",
        items: [
          "Nhận ra trigger ngay lúc nó xảy ra, không phải sau: Tập đặt tên cảm giác trong thời gian thực — Mình đang lo lắng. Mình đang muốn rút lui. Mình đang cần được trấn an.",
          "Làm việc với cơ thể, không chỉ với đầu: Mô thức được giải phóng qua cơ thể — thở, chuyển động, cảm nhận. Không qua phân tích thêm.",
          "Thực hành trong tình huống an toàn thật: Không phải đọc thêm. Là thử phản ứng khác đi trong một cuộc trò chuyện thật, một khoảnh khắc thật."
        ]
      },
      {
        type: "quote",
        content: "Mô thức không thay đổi khi bạn hiểu nó. Nó thay đổi khi bạn sống khác đi — lần này, rồi lần sau, rồi lần sau nữa."
      }
    ]
  },
  {
    slug: "dopamine-va-nhung-nguoi-gay-nghien",
    tag: "Khoa học thần kinh",
    tagColor: "#18B5B0",
    title: "Dopamine và những mối quan hệ gây nghiện: Khoa học đằng sau cảm giác không thể buông",
    excerpt: "Tại sao người hot-and-cold lại khó quên hơn người tốt bụng nhất quán? Tại sao bạn biết mối quan hệ độc hại nhưng vẫn quay lại? Đây không phải yếu đuối. Đây là neurochemistry.",
    readTime: "8 phút",
    publishDate: "Tháng 7, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn biết họ không tốt cho bạn. Bạn đã phân tích. Đã nói chuyện với bạn bè. Đã viết nhật ký. Đã quyết định dứt khoát."
      },
      {
        type: "paragraph",
        content: "Rồi họ nhắn một tin. Và mọi thứ sụp đổ."
      },
      {
        type: "paragraph",
        content: "Không phải vì bạn yếu. Mà vì não bạn đang bị mắc kẹt trong một vòng lặp neurochemical mà các nhà khoa học so sánh với nghiện chất."
      },
      {
        type: "heading",
        content: "Intermittent reinforcement — vũ khí gây nghiện mạnh nhất"
      },
      {
        type: "paragraph",
        content: "Nhà tâm lý học B.F. Skinner phát hiện điều này từ thập niên 1950 qua thí nghiệm với chuột: Lịch thưởng ngắt quãng — đôi khi có thưởng, đôi khi không — tạo ra hành vi mạnh nhất và dai dẳng nhất."
      },
      {
        type: "paragraph",
        content: "Máy đánh bạc hoạt động theo nguyên lý này. Mối quan hệ hot-and-cold cũng vậy."
      },
      {
        type: "paragraph",
        content: "Khi người yêu bạn nhất quán và tốt bụng — não bạn điều chỉnh về mức baseline. Mọi thứ dễ chịu nhưng không hưng phấn. Khi người yêu bạn lúc nóng lúc lạnh — não bạn liên tục ở trạng thái chờ đợi. Mỗi lần họ quay lại, dopamine tăng vọt. Cảm giác đó được não mã hóa là passion, chemistry, yêu thật sự."
      },
      {
        type: "quote",
        content: "Não không phân biệt được giữa phần thưởng gây ra bởi tình yêu lành mạnh và phần thưởng gây ra bởi sự giải thoát khỏi lo lắng. Cả hai đều tạo ra dopamine. Và não muốn thêm."
      },
      {
        type: "heading",
        content: "Cortisol: cơn nghiện ẩn phía sau sự lo lắng"
      },
      {
        type: "paragraph",
        content: "Mối quan hệ hỗn loạn không chỉ tạo ra dopamine — nó còn tạo ra cortisol liên tục. Cortisol là hormone stress. Khi bạn không biết họ có trả lời không, khi bạn phân tích từng tin nhắn, khi bạn chờ đợi trong lo lắng — cortisol đang chạy."
      },
      {
        type: "paragraph",
        content: "Khi stress giải tỏa — khi họ trả lời, khi họ quay lại — sự giảm cortisol đột ngột tạo ra cảm giác nhẹ nhõm được não giải thích là hạnh phúc. Là cảm giác đúng chỗ. Là nhà."
      },
      {
        type: "list",
        items: [
          "Người tốt bụng và nhất quán không kích hoạt vòng cortisol-dopamine này. Họ cảm thấy boring không phải vì họ kém hấp dẫn — mà vì não bạn chưa quen với sự an toàn.",
          "Người hỗn loạn và không thể đoán kích hoạt hệ thần kinh vào trạng thái chiến đấu hoặc bỏ chạy liên tục. Và sau đủ nhiều lần, hệ thần kinh bắt đầu nhầm trạng thái này với sự kết nối.",
          "Đây là lý do nhiều người nói cảm thấy boring với người tốt — không phải thiếu tình cảm, mà hệ thần kinh chưa được học cách cảm thấy an toàn với sự bình yên."
        ]
      },
      {
        type: "heading",
        content: "Thoát ra như thế nào khi não đang nghiện?"
      },
      {
        type: "paragraph",
        content: "Bước đầu tiên: không phán xét bản thân. Đây là phản ứng sinh học, không phải tính cách yếu đuối."
      },
      {
        type: "list",
        items: [
          "Đặt tên cho vòng lặp khi nó xảy ra: Mình đang trong vòng dopamine-cortisol. Não mình đang nhầm stress với passion. Đây không phải tình yêu thật — đây là hóa học não.",
          "Tránh tiếp xúc đủ lâu để vòng lặp giải thể: Giống như cai nghiện, cần thời gian không tiếp xúc để hệ thần kinh reset. Mỗi lần liên hệ lại làm vòng lặp mạnh thêm.",
          "Học cách chịu đựng sự bình yên: Nếu sự nhất quán cảm thấy boring, đây là thứ cần làm việc — không phải tìm thêm drama. Trị liệu hoặc coaching giúp hệ thần kinh học lại cách cảm thấy an toàn với sự an toàn."
        ]
      },
      {
        type: "quote",
        content: "Không phải bạn yêu họ. Là não bạn đang cần liều dopamine tiếp theo. Biết điều này không xóa cảm xúc — nhưng cho bạn lựa chọn khác để đứng ngoài vòng lặp."
      }
    ]
  },
  {
    slug: "tai-sao-ban-khong-chi-bi-thu-hut-ma-con-tai-tao",
    tag: "Quan hệ",
    tagColor: "#E8A87C",
    title: "Bạn không chỉ bị thu hút về cùng một kiểu người — bạn đang tái tạo họ",
    excerpt: "Mọi người hỏi: Tại sao mình cứ gặp cùng một kiểu người? Câu hỏi đúng hơn là: Tại sao mình vô thức chọn, diễn giải, và tạo ra điều kiện để những gì không lành mạnh lặp lại?",
    readTime: "9 phút",
    publishDate: "Tháng 7, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Cô ấy hẹn hò với ba người đàn ông khác nhau trong ba năm. Một kế toán trưởng. Một nghệ sĩ. Một kỹ sư. Hoàn cảnh khác nhau, nghề nghiệp khác nhau, tính cách khác nhau."
      },
      {
        type: "paragraph",
        content: "Nhưng kết thúc giống nhau: cô ấy cảm thấy không được lắng nghe. Không được trân trọng. Cô đơn trong mối quan hệ."
      },
      {
        type: "paragraph",
        content: "Vấn đề không phải là cô ấy gặp xui. Vấn đề nằm ở một nơi khác — và khó nhìn thấy hơn nhiều."
      },
      {
        type: "heading",
        content: "Repetition compulsion — cú lặp vô thức"
      },
      {
        type: "paragraph",
        content: "Sigmund Freud đặt tên cho hiện tượng này là repetition compulsion — xu hướng vô thức tái tạo những trải nghiệm chưa được giải quyết từ quá khứ. Không phải để đau thêm — mà vì não đang cố gắng lần này kết thúc khác đi."
      },
      {
        type: "paragraph",
        content: "Nếu bạn lớn lên với cha mẹ xa cách cảm xúc, bạn có thể liên tục bị thu hút bởi những người xa cách cảm xúc — và nỗ lực hết mình để làm họ gần gũi hơn. Không phải vì bạn thích đau. Mà vì phần vô thức của bạn đang cố gắng sửa kịch bản cũ."
      },
      {
        type: "quote",
        content: "Chúng ta không tìm kiếm người làm mình hạnh phúc. Chúng ta tìm kiếm người mà với họ, chúng ta có thể diễn lại và — hy vọng lần này — sửa được vở kịch từ tuổi thơ."
      },
      {
        type: "heading",
        content: "Ba cơ chế bạn tái tạo mô thức"
      },
      {
        type: "list",
        items: [
          "Lựa chọn có chọn lọc: Trong một phòng 50 người, hệ thần kinh của bạn nhận ra người phù hợp với mô thức quen thuộc và gửi tín hiệu hấp dẫn. Không phải vì họ tốt nhất — mà vì họ quen nhất với những gì bạn đã biết xử lý.",
          "Diễn giải có chọn lọc: Cùng một người, bạn có thể giải thích hành vi của họ theo cách xác nhận mô thức cũ. Họ đến muộn = không coi trọng mình. Hoặc: họ bận. Bộ lọc của bạn quyết định bạn thấy gì.",
          "Kích hoạt bằng hành vi của chính mình: Bạn có thể vô thức tạo ra điều kiện để mô thức cũ xảy ra — trở nên cần thiết quá mức, hoặc rút lui khi mọi thứ tốt đẹp, hoặc thử thách họ theo những cách khiến họ phản ứng theo cách quen thuộc với bạn."
        ]
      },
      {
        type: "heading",
        content: "Phá vỡ vòng lặp — không chỉ là chọn người khác"
      },
      {
        type: "paragraph",
        content: "Nhiều người nghĩ rằng nếu tìm được người khác type là xong. Nhưng nếu mô thức bên trong chưa thay đổi — bạn sẽ tái tạo động lực cũ với người mới."
      },
      {
        type: "list",
        items: [
          "Nhìn vào pattern, không phải người: Thay vì phân tích tại sao người đó như vậy — hỏi: Mình cảm thấy quen thuộc với điều gì trong mối quan hệ này? Mình đã cảm thấy điều này từ khi nào?",
          "Để ý khi nào bạn bị cuốn mạnh nhất: Sức hút mạnh bất thường thường là tín hiệu của mô thức cũ đang được kích hoạt — không phải tình yêu thật sự. Ngược lại, cảm giác ổn định và an toàn đôi khi bị nhầm là thiếu chemistry.",
          "Làm việc với kịch bản gốc: Điều thật sự cần thay đổi không phải danh sách người bạn chọn — mà là vết thương gốc mà mô thức đang cố gắng chữa lành. Đây là việc của trị liệu, coaching, hoặc làm việc nội tâm sâu."
        ]
      },
      {
        type: "quote",
        content: "Khi bạn thật sự chữa lành vết thương gốc — người bạn bị thu hút cũng sẽ thay đổi. Không phải vì bạn có tiêu chuẩn cao hơn. Mà vì bạn không còn cần họ để hoàn thành điều gì từ quá khứ nữa."
      }
    ]
  },
  {
    slug: "bong-toi-noi-tam-dang-dieu-khien-ban",
    tag: "Tự nhận thức",
    tagColor: "#7BAE7F",
    title: "Bóng tối nội tâm: Phần bạn từ chối đang điều khiển cuộc đời bạn",
    excerpt: "Carl Jung gọi nó là the Shadow — tất cả những phần của bạn mà bạn đã học cách giấu đi, từ chối, hoặc không nhận là của mình. Và chính những phần đó đang âm thầm quyết định nhiều lựa chọn quan trọng nhất của bạn.",
    readTime: "8 phút",
    publishDate: "Tháng 7, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn ghét khi người ta tự cao. Nhưng tại sao bạn ghét mạnh đến vậy?"
      },
      {
        type: "paragraph",
        content: "Bạn thấy khó chịu với người đặt ra ranh giới rõ ràng. Bạn xem người thẳng thắn là thô lỗ. Bạn không chịu được người cởi mở về cảm xúc của họ."
      },
      {
        type: "paragraph",
        content: "Jung có một câu trả lời đơn giản và khó chịu: Những gì bạn phản ứng mạnh nhất ở người khác thường là những gì bạn đang từ chối trong bản thân."
      },
      {
        type: "heading",
        content: "Shadow là gì?"
      },
      {
        type: "paragraph",
        content: "Từ khi còn nhỏ, bạn học được rằng một số phần của mình được chấp nhận — và một số phần thì không. Đứa trẻ khóc bị bảo im đi. Đứa trẻ tức giận bị phạt. Đứa trẻ kiêu ngạo bị xấu hổ."
      },
      {
        type: "paragraph",
        content: "Những phần đó không biến mất — chúng chui vào bóng tối. Jung gọi đây là the Shadow: kho chứa tất cả những thứ chúng ta đã học cách không nhận là của mình."
      },
      {
        type: "quote",
        content: "Cho đến khi bạn nhìn thấy bóng tối của mình, nó sẽ tiếp tục gọi nó là số phận."
      },
      {
        type: "heading",
        content: "Shadow hoạt động như thế nào?"
      },
      {
        type: "list",
        items: [
          "Phóng chiếu (Projection): Khi bạn không thể chấp nhận một phần của mình — bạn nhìn thấy nó ở người khác và phản ứng mạnh với nó. Người hay phán xét người khác là kiêu ngạo thường đang kìm nén sự kiêu ngạo của chính mình.",
          "Bùng nổ bất ngờ: Shadow không biến mất — nó chờ đợi. Khi bạn kiệt sức hoặc bị tổn thương, nó thoát ra theo cách không kiểm soát. Người bình thường rất điềm tĩnh đột nhiên nổi giận quá mức — đây là Shadow nói chuyện.",
          "Hành vi tự phá hoại: Đôi khi Shadow thể hiện qua những lựa chọn mà bạn không hiểu tại sao mình lại làm. Phá vỡ điều tốt đẹp. Tự cô lập khi cần kết nối. Trì hoãn khi cần tiến lên."
        ]
      },
      {
        type: "heading",
        content: "Shadow work không phải về việc trở thành tồi tệ hơn"
      },
      {
        type: "paragraph",
        content: "Nhiều người sợ nhìn vào bóng tối của mình vì nghĩ rằng chấp nhận nó có nghĩa là trở thành nó. Nhưng ngược lại."
      },
      {
        type: "paragraph",
        content: "Người không nhận ra sự giận dữ trong mình sẽ bị nó điều khiển. Người nhìn thấy và chấp nhận sự giận dữ — có thể chọn khi nào và cách nào bày tỏ nó. Ý thức tạo ra lựa chọn."
      },
      {
        type: "list",
        items: [
          "Bắt đầu với phản ứng mạnh: Điều gì hoặc ai làm bạn khó chịu không tương xứng? Đây là cửa vào bóng tối của bạn.",
          "Hỏi: Phần nào của mình đang được phản ánh ở đây? Không phải để chấp nhận hành vi — mà để nhìn thấy phần nào của mình đang bị từ chối.",
          "Tìm giá trị trong phần bị từ chối: Tức giận có thể là ranh giới cần được thiết lập. Kiêu ngạo có thể là tự tin chưa được nuôi dưỡng. Lạnh lùng có thể là nhu cầu không gian chưa được đáp ứng.",
          "Tích hợp, không phải loại bỏ: Shadow work không phải xóa bóng tối. Là đưa nó vào ánh sáng để bạn có thể làm việc với nó có ý thức."
        ]
      },
      {
        type: "quote",
        content: "Người không nhìn thấy bóng tối của mình sẽ chiếu nó lên thế giới và gọi đó là số phận. Người nhìn thấy nó — có cơ hội thật sự để tự do."
      }
    ]
  },
  {
    slug: "tu-pha-hoai-va-khoa-hoc-dang-sau",
    tag: "Hành vi",
    tagColor: "#6B678F",
    title: "Tự phá hoại: Khi phần bạn ghét nhất trong mình lại đang cố bảo vệ bạn",
    excerpt: "Bạn muốn thành công — nhưng lại trì hoãn đúng lúc quan trọng. Bạn muốn mối quan hệ tốt — nhưng lại làm hỏng chính xác khi mọi thứ bắt đầu đẹp. Đây không phải yếu đuối. Đây là hệ thống bảo vệ cũ đang chạy sai thời điểm.",
    readTime: "8 phút",
    publishDate: "Tháng 7, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Anh ấy đã chuẩn bị cho buổi thuyết trình quan trọng nhất trong sự nghiệp suốt hai tuần. Tối hôm trước — anh mở Netflix."
      },
      {
        type: "paragraph",
        content: "Cô ấy cuối cùng đã gặp được người tốt. Người kiên nhẫn, trưởng thành, không drama. Sau ba tuần — cô bắt đầu tìm lỗi."
      },
      {
        type: "paragraph",
        content: "Đây là self-sabotage — tự phá hoại. Và nó xảy ra thường xuyên hơn bạn nghĩ, ngay cả ở những người thành công nhất."
      },
      {
        type: "heading",
        content: "Self-sabotage là cơ chế bảo vệ cũ"
      },
      {
        type: "paragraph",
        content: "Nghịch lý của self-sabotage là: não bộ đang cố bảo vệ bạn. Chỉ là bảo vệ bạn khỏi thứ gì đó mà bây giờ không còn là mối đe dọa nữa."
      },
      {
        type: "paragraph",
        content: "Nếu lớn lên bạn học rằng thành công thu hút sự ghen tị và tấn công — não bạn mã hóa thành công = nguy hiểm. Nếu mỗi khi mối quan hệ trở nên gần gũi thì đau xảy ra — não mã hóa gần gũi = nguy hiểm."
      },
      {
        type: "paragraph",
        content: "Phần não cũ không cập nhật calendar. Nó vẫn đang chạy phần mềm từ 20 năm trước. Và khi bạn tiến gần đến thứ gì đó mà nó mã hóa là nguy hiểm — nó kéo tay phanh."
      },
      {
        type: "quote",
        content: "Bạn không phá hoại vì bạn không muốn thành công. Bạn phá hoại vì một phần của bạn tin rằng thành công sẽ mang lại điều gì đó đáng sợ hơn thất bại."
      },
      {
        type: "heading",
        content: "Cognitive dissonance và self-sabotage"
      },
      {
        type: "paragraph",
        content: "Cognitive dissonance là sự căng thẳng khi bạn hành động khác với niềm tin về bản thân. Nếu bạn tin sâu bên trong rằng mình không xứng đáng với thành công — khi bắt đầu thành công, bạn cảm thấy dissonance không thoải mái."
      },
      {
        type: "paragraph",
        content: "Não tìm cách giải quyết dissonance đó nhanh nhất có thể. Và cách nhanh nhất không phải thay đổi niềm tin — mà là thay đổi hành vi cho phù hợp với niềm tin cũ. Tự phá hoại chính là cách não giải quyết dissonance."
      },
      {
        type: "heading",
        content: "Dấu hiệu self-sabotage bạn có thể không nhận ra"
      },
      {
        type: "list",
        items: [
          "Trì hoãn đúng lúc quan trọng: Không phải lười — mà hệ thần kinh đang né tránh thứ mà nó mã hóa là nguy hiểm.",
          "Tìm lỗi khi mọi thứ tốt đẹp: Mối quan hệ tốt, công việc tốt — nhưng bạn thấy khó chịu và bắt đầu tìm lý do để rời đi.",
          "Không hoàn thành những gì đã bắt đầu: Bắt đầu nhiều dự án nhưng không xong — vì hoàn thành đồng nghĩa với phán xét, và phán xét đồng nghĩa với nguy hiểm.",
          "Tự cô lập khi cần hỗ trợ nhất: Khi áp lực lớn nhất, bạn rút lui thay vì kết nối. Vì cần người khác cảm thấy dễ bị tổn thương."
        ]
      },
      {
        type: "heading",
        content: "Làm việc với self-sabotage"
      },
      {
        type: "paragraph",
        content: "Bước đầu tiên là bỏ tự trách. Self-sabotage không phải tính cách xấu hay thiếu ý chí — đây là cơ chế bảo vệ. Và cơ chế bảo vệ cần được cảm ơn trước khi có thể được cập nhật."
      },
      {
        type: "list",
        items: [
          "Nhận ra pattern trước khi nó hoàn thành: Để ý khi nào bạn bắt đầu trì hoãn, rút lui, hoặc tìm lỗi. Hỏi: Mình đang sắp sửa làm gì đây?",
          "Tìm niềm tin ẩn phía sau: Nếu mình thành công điều này — mình sợ điều gì sẽ xảy ra? Câu trả lời thường là cốt lõi của pattern.",
          "Thay đổi niềm tin, không phải cố ép hành vi: Ép hành vi mà không thay đổi niềm tin tạo ra thêm dissonance và nhiều self-sabotage hơn. Làm việc với nhà trị liệu hoặc coach để thay đổi từ gốc."
        ]
      },
      {
        type: "quote",
        content: "Phần phá hoại bạn không phải kẻ thù. Đó là đứa trẻ sợ hãi đang cố giữ bạn an toàn theo cách nó biết. Hiểu nó — bạn có thể thuyết phục nó thử cách khác."
      }
    ]
  },
  {
    slug: "gan-bo-hon-loan-khi-yeu-la-chay-tron",
    tag: "Gắn bó",
    tagColor: "#E8A87C",
    title: "Gắn bó hỗn loạn: Khi bạn vừa chạy đến vừa chạy trốn trong cùng một mối quan hệ",
    excerpt: "Bạn khao khát sự gần gũi — nhưng khi có được nó, bạn hoảng sợ. Bạn đẩy người ta đi — rồi sụp đổ khi họ rời. Đây là kiểu gắn bó khó nhận ra nhất và cũng đau đớn nhất.",
    readTime: "9 phút",
    publishDate: "Tháng 7, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Bạn muốn yêu và được yêu — sâu trong lòng, bạn chắc chắn về điều đó. Nhưng mỗi khi ai đó thật sự đến gần — có gì đó trong bạn muốn bỏ chạy."
      },
      {
        type: "paragraph",
        content: "Và khi bạn bỏ chạy — hoặc họ bỏ chạy vì bạn — bạn lại sụp đổ vì cô đơn."
      },
      {
        type: "paragraph",
        content: "Không phải bạn điên. Không phải bạn không biết yêu. Đây là gắn bó hỗn loạn — và nó có lý do rất rõ ràng."
      },
      {
        type: "heading",
        content: "Gắn bó hỗn loạn hình thành thế nào?"
      },
      {
        type: "paragraph",
        content: "Trong nghiên cứu của Mary Ainsworth và sau đó là Mary Main, gắn bó hỗn loạn (disorganized attachment) xảy ra khi người chăm sóc đồng thời là nguồn an toàn và nguồn nguy hiểm."
      },
      {
        type: "paragraph",
        content: "Với đứa trẻ có cha hoặc mẹ bạo lực, nghiện ngập, hoặc không ổn định về mặt cảm xúc — đứa trẻ đối mặt với nghịch lý không thể giải quyết: Người mình cần để được an toàn chính là người khiến mình không an toàn."
      },
      {
        type: "paragraph",
        content: "Não trẻ em không thể xử lý nghịch lý này. Không thể tiến gần (nguy hiểm) cũng không thể rời xa (cũng nguy hiểm). Kết quả là: hệ thống gắn bó bị gián đoạn và hỗn loạn."
      },
      {
        type: "quote",
        content: "Người có gắn bó hỗn loạn không thiếu khả năng yêu. Họ yêu rất mãnh liệt — nhưng tình yêu với họ đã được học là đi kèm với đau, nguy hiểm, hoặc mất bản thân."
      },
      {
        type: "heading",
        content: "Dấu hiệu gắn bó hỗn loạn trong quan hệ trưởng thành"
      },
      {
        type: "list",
        items: [
          "Vừa muốn gần vừa muốn chạy: Khi người ta xa, bạn khao khát. Khi người ta gần, bạn cảm thấy ngạt thở và tìm cách tạo khoảng cách. Vòng lặp này lặp đi lặp lại.",
          "Phản ứng cực đoan: Không có vùng trung gian. Yêu hết mực hoặc ghét hoàn toàn. Người hoàn hảo hoặc người tệ nhất. Lý tưởng hóa rồi phá vỡ.",
          "Sợ bị bỏ rơi lẫn sợ bị nuốt chửng: Cả hai nỗi sợ cùng tồn tại — và chúng kéo bạn về hai hướng đối lập trong cùng một mối quan hệ.",
          "Tự phá hoại khi mọi thứ tốt đẹp: Khi mối quan hệ ổn định và an toàn — cảm giác đó lạ lẫm đến mức bạn vô thức phá vỡ nó để quay về vùng quen thuộc.",
          "Khó tin tưởng — nhưng cũng bám víu quá mức: Vừa không tin người khác sẽ ở lại, vừa bám chặt theo cách đẩy họ đi."
        ]
      },
      {
        type: "heading",
        content: "Chữa lành gắn bó hỗn loạn"
      },
      {
        type: "paragraph",
        content: "Gắn bó hỗn loạn là kiểu gắn bó khó chữa lành nhất — nhưng cũng hoàn toàn có thể thay đổi được. Điều quan trọng nhất: cần một mối quan hệ an toàn và nhất quán để não học lại rằng gần gũi không phải nguy hiểm."
      },
      {
        type: "list",
        items: [
          "Trị liệu chuyên sâu về sang chấn: Đặc biệt là các phương pháp làm việc với cơ thể như EMDR, Somatic Experiencing. Gắn bó hỗn loạn có gốc rễ sang chấn sâu — cần được tiếp cận ở cấp độ đó.",
          "Nhận ra vòng lặp tiếp cận-rút lui: Khi bạn cảm thấy ngạt thở, đặt tên cho nó: Mình đang muốn chạy. Đây là phản xạ cũ, không phải thực tế hiện tại.",
          "Thực hành chịu đựng sự gần gũi an toàn: Bắt đầu nhỏ — chịu đựng sự kết nối chân thực trong 5 phút, 10 phút. Não học rằng gần gũi không gây hại.",
          "Kiên nhẫn với chính mình: Gắn bó hỗn loạn hình thành trong nhiều năm đầu đời. Thay đổi nó không thể xảy ra trong vài tuần. Mỗi lần bạn chọn ở lại thay vì bỏ chạy — là một bước thật."
        ]
      },
      {
        type: "quote",
        content: "Bạn không bị hỏng. Bạn đang chạy phần mềm được viết bởi hoàn cảnh không phải do bạn chọn. Và phần mềm đó có thể được viết lại — từng trải nghiệm an toàn một."
      }
    ]
  },
  {
    slug: "enneagram-va-shadow-khi-diem-manh-la-diem-mu",
    tag: "Phân biệt mô thức",
    tagColor: "#9B7FD4",
    title: "Khi điểm mạnh của bạn trở thành điểm mù: Mặt tối trong mỗi mô thức",
    excerpt: "Mỗi mô thức Enneagram có một điểm mạnh nổi bật — và một mặt tối tương ứng mà chính mô thức đó khó nhìn thấy nhất. Hiểu điều này không phải để tự trách — mà để không bị cái mạnh của mình làm hại chính mình.",
    readTime: "8 phút",
    publishDate: "Tháng 7, 2026",
    sections: [
      {
        type: "paragraph",
        content: "Type 1 cực kỳ trách nhiệm — và không thể tha thứ cho bản thân khi không hoàn hảo."
      },
      {
        type: "paragraph",
        content: "Type 2 vô cùng quan tâm người khác — và không biết cách nhận lại sự quan tâm."
      },
      {
        type: "paragraph",
        content: "Type 3 làm việc không mệt mỏi — và không biết mình là ai khi không làm gì."
      },
      {
        type: "paragraph",
        content: "Không phải ngẫu nhiên. Mặt tối của mỗi mô thức luôn nằm chính xác ở phần mà mô thức đó phát triển nhất."
      },
      {
        type: "heading",
        content: "Tại sao điểm mạnh tạo ra điểm mù?"
      },
      {
        type: "paragraph",
        content: "Enneagram không mô tả tính cách. Nó mô tả chiến lược sinh tồn — cách mỗi người học để đảm bảo an toàn và thuộc về. Chiến lược đó được luyện tập đến mức trở thành bản năng. Và bất kỳ điều gì trở thành bản năng đều có thể chạy mà không cần ý thức."
      },
      {
        type: "paragraph",
        content: "Jung gọi điều này là one-sidedness — sự phát triển một chiều. Khi bạn phát triển quá mạnh về một phía, phía đối lập bị bỏ quên và trở thành bóng tối."
      },
      {
        type: "heading",
        content: "Mặt tối trong từng mô thức"
      },
      {
        type: "list",
        items: [
          "Type 1 — Người Cầu Toàn: Điểm mạnh là tính chính trực và trách nhiệm. Mặt tối: Phê phán bản thân và người khác theo tiêu chuẩn không thể đáp ứng. Khi mọi thứ không đạt chuẩn — tức giận bị kìm nén biến thành phán xét ngầm.",
          "Type 2 — Người Cho Đi: Điểm mạnh là sự ấm áp và quan tâm. Mặt tối: Cho đi để được cần, không phải vì muốn. Không nhận ra nhu cầu của chính mình. Và khi không được ghi nhận — cảm thấy bị lợi dụng dù không ai ép.",
          "Type 3 — Người Thành Công: Điểm mạnh là năng lực và hiệu quả. Mặt tối: Danh tính gắn chặt với thành tích. Không biết mình là ai khi thất bại hoặc không làm gì. Giỏi thể hiện cảm xúc cần thiết — khó cảm nhận cảm xúc thật.",
          "Type 4 — Người Độc Đáo: Điểm mạnh là chiều sâu cảm xúc và sự chân thực. Mặt tối: Đắm chìm trong cảm xúc đến mức tê liệt. Lý tưởng hóa những gì không có và phủ nhận những gì đang có.",
          "Type 5 — Người Quan Sát: Điểm mạnh là tư duy độc lập và phân tích sâu. Mặt tối: Rút vào đầu, tách khỏi cơ thể và cảm xúc. Thu mình để bảo toàn năng lượng đến mức cô lập.",
          "Type 6 — Người Trung Thành: Điểm mạnh là sự cảnh giác và trung thành. Mặt tối: Lo lắng mãn tính về mối đe dọa — thật và tưởng tượng. Tin tưởng người khác hơn bản thân, hoặc ngược lại — không tin ai.",
          "Type 7 — Người Nhiệt Tình: Điểm mạnh là năng lượng và khả năng tận hưởng. Mặt tối: Né tránh đau, tổn thương, và bất kỳ thứ gì âm tính bằng cách luôn chuyển sang điều mới. Không ngồi lại đủ lâu để xử lý.",
          "Type 8 — Người Thủ Lĩnh: Điểm mạnh là sức mạnh và bảo vệ người khác. Mặt tối: Dễ bị tổn thương bị xem là yếu đuối — cần kiểm soát để cảm thấy an toàn. Đẩy người khác đi vì tiến gần quá sẽ dẫn đến bị phản bội.",
          "Type 9 — Người Hòa Giải: Điểm mạnh là sự bình thản và chấp nhận. Mặt tối: Hòa giải bằng cách xóa mờ bản thân — không biết mình muốn gì, cần gì. Tránh xung đột đến mức không còn tiếng nói riêng."
        ]
      },
      {
        type: "quote",
        content: "Không có type nào tốt hơn type nào. Mỗi type có món quà của nó — và bóng tối tương xứng. Trưởng thành không phải trở thành type khác. Là nhìn thấy bóng tối của type mình — và chọn có ý thức hơn."
      },
      {
        type: "heading",
        content: "Làm việc với mặt tối của mô thức"
      },
      {
        type: "paragraph",
        content: "Câu hỏi không phải Mình là type gì? Câu hỏi sâu hơn là: Điểm mạnh của mình đang được dùng như thế nào? Nó đang phục vụ mình và người xung quanh — hay nó đang chạy tự động và gây hại?"
      },
      {
        type: "paragraph",
        content: "Type 1 có thể dùng tính trách nhiệm để xây dựng — hoặc để phán xét. Type 2 có thể dùng sự quan tâm để kết nối thật — hoặc để kiểm soát. Sự khác biệt nằm ở mức độ ý thức, không phải ở type."
      }
    ]
  }

];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map(a => a.slug);
}

export function getRelatedArticles(currentSlug: string, tag: string, limit = 3): Article[] {
  return articles
    .filter(a => a.slug !== currentSlug && a.tag === tag)
    .slice(0, limit);
}

