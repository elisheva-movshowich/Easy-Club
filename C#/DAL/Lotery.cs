//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Lotery
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Lotery()
        {
            this.ClubCards = new HashSet<ClubCards>();
        }
    
        public int C_id { get; set; }
        public Nullable<int> EnterpCardId { get; set; }
        public string LoteryType { get; set; }
        public Nullable<int> Sum { get; set; }
        public string SumType { get; set; }
        public Nullable<int> Num1 { get; set; }
        public Nullable<int> Num2 { get; set; }
        public string Addition { get; set; }
        public Nullable<int> Expiration { get; set; }
        public Nullable<int> Type { get; set; }
        public Nullable<System.DateTime> ExpireDate { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ClubCards> ClubCards { get; set; }
        public virtual EnterpCards EnterpCards { get; set; }
    }
}
