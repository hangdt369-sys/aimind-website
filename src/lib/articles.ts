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
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map(a => a.slug);
}
